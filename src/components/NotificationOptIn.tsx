import React, { useState, useEffect } from 'react';
import { Bell, X, Check } from 'lucide-react';

const STORAGE_KEYS = {
  DISMISSED_UNTIL: 'alqaeed_push_dismissed_until',
  PERMISSION_STATE: 'alqaeed_push_permission_state',
  PAGE_VIEWS: 'alqaeed_page_views',
  FIRST_VISIT_TIME: 'alqaeed_first_visit_time'
};

const COOLDOWN_DAYS_ON_DISMISS = 14; // Do not show prompt for 14 days if user clicked 'Not Now'
const MIN_PAGE_VIEWS = 2; // Show only after viewing at least 2 pages or after engaging
const MIN_ENGAGEMENT_SECONDS = 15; // Or staying on page for 15+ seconds

export default function NotificationOptIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<'idle' | 'subscribed' | 'denied'>('idle');

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined' || !('Notification' in window) || !('serviceWorker' in navigator)) {
      return;
    }

    // If permission is already granted or denied by browser, don't show the opt-in banner
    if (Notification.permission === 'granted' || Notification.permission === 'denied') {
      return;
    }

    // Check cooldown / dismissal
    const dismissedUntil = localStorage.getItem(STORAGE_KEYS.DISMISSED_UNTIL);
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
      return;
    }

    // Track user engagement
    const now = Date.now();
    const storedFirstVisit = localStorage.getItem(STORAGE_KEYS.FIRST_VISIT_TIME);
    if (!storedFirstVisit) {
      localStorage.setItem(STORAGE_KEYS.FIRST_VISIT_TIME, now.toString());
    }

    const currentViews = parseInt(localStorage.getItem(STORAGE_KEYS.PAGE_VIEWS) || '0', 10) + 1;
    localStorage.setItem(STORAGE_KEYS.PAGE_VIEWS, currentViews.toString());

    // Timer check for genuine interaction before showing
    let timer: NodeJS.Timeout | null = null;
    const shouldShow = currentViews >= MIN_PAGE_VIEWS;

    if (shouldShow) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
    } else {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, MIN_ENGAGEMENT_SECONDS * 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    const cooldownTimestamp = Date.now() + COOLDOWN_DAYS_ON_DISMISS * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEYS.DISMISSED_UNTIL, cooldownTimestamp.toString());
    localStorage.setItem(STORAGE_KEYS.PERMISSION_STATE, 'dismissed');
  };

  const handleSubscribe = async () => {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      setIsVisible(false);
      return;
    }

    try {
      // 1. Register service worker safely
      const registration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;

      // 2. Request native notification permission
      const permission = await Notification.requestPermission();

      if (permission === 'granted') {
        setStatus('subscribed');
        localStorage.setItem(STORAGE_KEYS.PERMISSION_STATE, 'granted');
        
        // Hide after showing success feedback
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      } else {
        setStatus('denied');
        localStorage.setItem(STORAGE_KEYS.PERMISSION_STATE, 'denied');
        setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      }
    } catch (err) {
      console.warn('Push notification subscription deferred:', err);
      setIsVisible(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="notification-optin-banner"
      role="region"
      aria-label="إشعارات القائد المالية"
      className="fixed bottom-20 left-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-80 bg-white border border-border-subtle shadow-xl rounded-xl p-4 font-arabic text-right transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      dir="rtl"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 mt-0.5">
          <Bell className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0">
          {status === 'subscribed' ? (
            <div className="flex items-center gap-1.5 text-secondary font-medium text-sm py-1">
              <Check className="w-4 h-4 text-secondary shrink-0" />
              <span>تم تفعيل الإشعارات بنجاح! سنوافيك بكل ما هو مفيد.</span>
            </div>
          ) : (
            <>
              <h3 className="text-sm font-bold text-text-primary mb-1">
                هل ترغب في تلقي نصائح مالية مفيدة؟
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                نرسل محتوى ماليًا وتنبيهات محاسبية دورية غير مزعجة (بحد أقصى مرتين شهريًا)، ويمكنك إيقافها في أي وقت.
              </p>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="btn-accept-notifications"
                  onClick={handleSubscribe}
                  className="flex-1 px-3 py-1.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-semibold transition-colors text-center"
                >
                  السماح بالإشعارات
                </button>
                <button
                  type="button"
                  id="btn-dismiss-notifications"
                  onClick={handleDismiss}
                  className="px-3 py-1.5 bg-surface-subtle hover:bg-border-subtle text-text-secondary rounded-lg text-xs font-medium transition-colors text-center"
                >
                  ليس الآن
                </button>
              </div>
            </>
          )}
        </div>

        {status === 'idle' && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="إغلاق التنبيه"
            className="text-text-muted hover:text-text-primary transition-colors p-1 -mr-1 -mt-1 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
