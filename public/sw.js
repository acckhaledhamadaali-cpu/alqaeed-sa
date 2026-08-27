/**
 * Service Worker for Al-Qaeed Web Push Architecture (Phase 2)
 * Lightweight, compliant service worker ready for future Push Notification providers
 * (e.g. Firebase Cloud Messaging, OneSignal, or custom backend).
 */

self.addEventListener('install', (event) => {
  // Activate immediately without waiting
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim clients immediately to manage open pages
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  if (!event.data) {
    return;
  }

  let data = {};
  try {
    data = event.data.json();
  } catch (e) {
    data = {
      title: 'القائد للإدارة المالية',
      body: event.data.text()
    };
  }

  const title = data.title || 'القائد للإدارة المالية';
  const options = {
    body: data.body || 'لديك تحديث مالي جديد من القائد.',
    icon: data.icon || '/favicon.png',
    badge: data.badge || '/favicon-32x32.png',
    dir: 'rtl',
    lang: 'ar',
    tag: data.tag || 'alqaeed-notification',
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Check if there is already a window open with this URL or origin
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          if (client.url === targetUrl) {
            return client.focus();
          } else if ('navigate' in client) {
            return client.navigate(targetUrl).then((c) => c.focus());
          }
        }
      }
      // If no window is open, open a new one
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
