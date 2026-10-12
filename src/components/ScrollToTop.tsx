import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is an anchor hash in the URL (e.g. #008 or #signal-008), scroll to that element
    if (hash) {
      const clean = hash.replace(/^#/, '');
      const timer = setTimeout(() => {
        const el = document.getElementById(clean) || 
                   document.getElementById(`signal-${clean}`) ||
                   document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Instantly reset scroll to top for fresh page loads
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
    
    // Virtual page view tracking for single page app route navigation
    trackPageView(pathname);
  }, [pathname, hash]);

  return null;
}
