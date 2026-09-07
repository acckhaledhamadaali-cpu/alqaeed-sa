import React, { useState, useEffect, useRef } from 'react';
import { LogoAsset } from '../../types/logo';
import { getLogos, saveLogos } from '../../services/logoService';
import { Plus, GripVertical, Trash2, Power, Replace, FileImage } from 'lucide-react';
import AccountingLogoMarquee from '../../components/AccountingLogoMarquee';

export default function LogoAssetsPage() {
  const [logos, setLogos] = useState<LogoAsset[]>([]);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  
  // File upload state
  const [uploadName, setUploadName] = useState('');
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLogos(getLogos());
  }, []);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget.parentNode as string);
    // Optional: make the dragged item slightly transparent
    setTimeout(() => {
      if (e.target instanceof HTMLElement) {
        e.target.style.opacity = '0.5';
      }
    }, 0);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedIdx === null) return;
    
    const newLogos = [...logos];
    const draggedItem = newLogos[draggedIdx];
    
    // Remove item from original position
    newLogos.splice(draggedIdx, 1);
    // Insert at new position
    newLogos.splice(targetIndex, 0, draggedItem);
    
    // Update sortOrder based on new array order
    newLogos.forEach((logo, idx) => {
      logo.sortOrder = idx;
    });
    
    setLogos(newLogos);
    saveLogos(newLogos);
    setDraggedIdx(null);
    
    // Reset opacity
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = '1';
    }
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedIdx(null);
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = '1';
    }
  };

  const toggleEnabled = (id: string) => {
    const updated = logos.map(l => l.id === id ? { ...l, enabled: !l.enabled } : l);
    setLogos(updated);
    saveLogos(updated);
  };

  const deleteLogo = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الشعار بشكل نهائي؟')) {
      const updated = logos.filter(l => l.id !== id);
      setLogos(updated);
      saveLogos(updated);
    }
  };

  const processFile = (file: File, callback: (base64: string) => void) => {
    setUploadError('');
    if (!file.type.startsWith('image/')) {
      setUploadError('يرجى اختيار ملف صورة صالح (SVG, PNG, WEBP, JPG).');
      return;
    }
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setUploadError('حجم الصورة يجب أن لا يتجاوز 2 ميجابايت.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        callback(result);
      }
    };
    reader.onerror = () => {
      setUploadError('حدث خطأ أثناء قراءة الملف.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file, (base64) => setUploadImage(base64));
    }
  };

  const addNewLogo = () => {
    if (!uploadName.trim()) {
      setUploadError('يرجى إدخال اسم البرنامج/الشركة.');
      return;
    }
    if (!uploadImage) {
      setUploadError('يرجى رفع صورة الشعار.');
      return;
    }

    const newLogo: LogoAsset = {
      id: Date.now().toString(),
      name: uploadName.trim(),
      imageUrl: uploadImage,
      enabled: true,
      sortOrder: logos.length,
      createdAt: Date.now()
    };

    const updated = [...logos, newLogo];
    setLogos(updated);
    saveLogos(updated);
    
    // Reset form
    setUploadName('');
    setUploadImage(null);
    setUploadError('');
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const replaceImage = (id: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/svg+xml, image/png, image/webp, image/jpeg';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        processFile(file, (base64) => {
          const updated = logos.map(l => l.id === id ? { ...l, imageUrl: base64 } : l);
          setLogos(updated);
          saveLogos(updated);
        });
      }
    };
    input.click();
  };

  return (
    <div className="min-h-screen bg-surface-muted py-12 px-4 font-sans text-right" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-surface-card p-6 rounded-2xl shadow-sm border border-border-subtle">
          <h1 className="text-2xl font-bold text-primary mb-2 font-arabic">إدارة أصول الشعارات (Logo Assets)</h1>
          <p className="text-text-secondary text-sm">
            أدر الشعارات التي تظهر في شريط البرامج المحاسبية المتحرك. يمكنك رفع صور جديدة (يفضل SVG أو PNG شفافة)، ترتيبها بالسحب والإفلات، تفعيلها أو إخفائها.
          </p>
        </div>

        {/* Live Preview */}
        <div className="bg-surface-card p-6 rounded-2xl shadow-sm border border-border-subtle">
          <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            معاينة حية (Live Preview)
          </h2>
          <div className="bg-surface-subtle/50 rounded-xl border border-border-subtle overflow-hidden">
             {/* Note: This is an isolated preview, not wrapped in the exact same container as the main page, but sufficient to show the animation */}
             <AccountingLogoMarquee />
          </div>
        </div>

        {/* Upload Form */}
        <div className="bg-surface-card p-6 rounded-2xl shadow-sm border border-border-subtle">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-primary">رفع شعار جديد</h2>
            <button 
              onClick={() => setIsUploading(!isUploading)}
              className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة شعار</span>
            </button>
          </div>

          {isUploading && (
            <div className="bg-surface-subtle/30 p-6 rounded-xl border border-border-subtle mb-6 animate-in fade-in slide-in-from-top-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">اسم البرنامج / الشركة</label>
                  <input 
                    type="text" 
                    value={uploadName}
                    onChange={(e) => setUploadName(e.target.value)}
                    placeholder="مثال: Xero"
                    className="w-full px-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">صورة الشعار (SVG, PNG, WEBP)</label>
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer px-4 py-2 bg-white border border-border-subtle hover:bg-surface-subtle transition rounded-lg text-sm font-semibold flex items-center gap-2">
                      <FileImage className="w-4 h-4 text-text-secondary" />
                      <span>اختر ملف...</span>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/svg+xml, image/png, image/webp, image/jpeg"
                        className="hidden"
                      />
                    </label>
                    {uploadImage && (
                      <div className="h-10 px-4 bg-white border border-border-subtle rounded flex items-center justify-center">
                        <img src={uploadImage} alt="Preview" className="h-6 object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {uploadError && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-lg border border-red-100">
                  {uploadError}
                </div>
              )}

              <div className="mt-6 flex justify-end gap-3">
                <button 
                  onClick={() => {
                    setIsUploading(false);
                    setUploadImage(null);
                    setUploadName('');
                    setUploadError('');
                  }}
                  className="px-4 py-2 bg-white border border-border-subtle text-text-secondary text-sm font-semibold rounded-lg hover:bg-surface-subtle transition"
                >
                  إلغاء
                </button>
                <button 
                  onClick={addNewLogo}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition"
                >
                  حفظ الشعار
                </button>
              </div>
            </div>
          )}

          {/* List of assets */}
          <div className="space-y-3 mt-4">
            {logos.length === 0 ? (
              <div className="text-center py-12 text-text-muted text-sm border-2 border-dashed border-border-subtle rounded-xl">
                لا يوجد شعارات حالياً. ابدأ بإضافة شعار جديد.
              </div>
            ) : (
              logos.map((logo, index) => (
                <div 
                  key={logo.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`flex items-center gap-4 p-4 bg-white border rounded-xl shadow-sm transition-all
                    ${logo.enabled ? 'border-border-subtle' : 'border-gray-200 opacity-60 bg-gray-50'}
                    hover:border-primary/30 cursor-move group
                  `}
                >
                  {/* Drag Handle */}
                  <div className="text-gray-300 group-hover:text-gray-500 cursor-grab active:cursor-grabbing px-2 shrink-0">
                    <GripVertical className="w-5 h-5" />
                  </div>

                  {/* Image Preview */}
                  <div className="w-32 h-12 bg-surface-subtle/50 rounded flex items-center justify-center p-2 shrink-0 border border-border-subtle/50">
                    <img src={logo.imageUrl} alt={logo.name} className="max-h-full max-w-full object-contain" />
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <div className="font-bold text-gray-900">{logo.name}</div>
                    <div className="text-xs text-gray-500">
                      {logo.enabled ? 'نشط ويظهر في الموقع' : 'مخفي مؤقتاً'}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => toggleEnabled(logo.id)}
                      title={logo.enabled ? 'إخفاء' : 'تفعيل'}
                      className={`p-2 rounded-lg transition ${logo.enabled ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                    >
                      <Power className="w-4 h-4" />
                    </button>
                    
                    <button 
                      onClick={() => replaceImage(logo.id)}
                      title="استبدال الصورة"
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Replace className="w-4 h-4" />
                    </button>
                    
                    <button 
                      onClick={() => deleteLogo(logo.id)}
                      title="حذف"
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}