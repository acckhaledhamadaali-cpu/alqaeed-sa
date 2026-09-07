import { FileText, Download, Lock } from 'lucide-react';

interface PdfLeadMagnetProps {
  title: string;
  subtitle: string;
  reportName: string;
  whatsappUrl: string;
  documentContent: React.ReactNode;
}

export default function PdfLeadMagnet({ title, subtitle, reportName, whatsappUrl, documentContent }: PdfLeadMagnetProps) {
  return (
    <div className="my-10">
      {(title || subtitle) && (
        <div className="text-center mb-6">
          {title && <h3 className="text-xl font-bold text-text-primary mb-2 font-arabic">{title}</h3>}
          {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-border-subtle bg-surface-subtle shadow-md">
        
        {/* PDF Reader Toolbar */}
        <div className="bg-[#323639] px-4 py-3 flex items-center justify-between text-white border-b border-[#202124]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-400" />
            <span className="text-xs sm:text-sm font-sans font-medium truncate max-w-[150px] sm:max-w-xs">{reportName}.pdf</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans text-gray-300 hidden sm:flex">
            <span>1 / 1</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>100%</span>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-secondary hover:bg-secondary/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">تحميل النموذج</span>
            <span className="sm:hidden">تحميل</span>
          </a>
        </div>

        {/* Document Container (Gray Background) */}
        <div className="bg-[#525659] p-2 sm:p-8 flex justify-center">
          
          {/* Actual A4 Page Mockup */}
          <div className="w-full max-w-[210mm] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-sm p-3 sm:p-10 text-black font-sans relative flex flex-col justify-between">
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden z-0">
              <span className="text-6xl sm:text-9xl font-bold rotate-45 whitespace-nowrap">نموذج استرشادي</span>
            </div>

            {/* Document Content */}
            <div className="relative z-10 mb-8 sm:mb-12">
              {documentContent}
            </div>

            {/* Document Footer */}
            <div className="border-t-2 border-gray-300 pt-4 text-[10px] sm:text-xs text-gray-500 flex justify-between items-center font-bold relative z-10 mt-auto">
              <span>القائد للإدارة المالية</span>
              <span>www.alqaeed-sa.pages.dev</span>
            </div>
            
          </div>
        </div>

      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-text-muted">
        <Lock className="w-3.5 h-3.5" />
        <span>جميع النماذج تخضع لميثاق السرية التامة (NDA). الأرقام المعروضة للاسترشاد فقط.</span>
      </div>
    </div>
  );
}
