import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  try {
    logEvent(analytics, eventName, parameters);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

export const trackContactFormSubmission = () => {
  trackEvent('contact_form_submit');
};

export const trackResumeDownload = () => {
  trackEvent('resume_download');
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName
  });
};