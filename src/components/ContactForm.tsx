import React, { useState } from 'react';
import { submitContactForm, ContactFormData } from '../services/contactService';
import { trackContactFormSubmission } from '../services/analyticsService';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmitSuccess, 
  onSubmitError 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      onSubmitError?.('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      onSubmitError?.('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        trackContactFormSubmission();
        setFormData({ name: '', email: '', message: '' });
        onSubmitSuccess?.();
      } else {
        onSubmitError?.(result.error || 'Failed to submit form');
      }
    } catch (error) {
      onSubmitError?.(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="name">Your Name</label>
      </div>
      
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="email">Your Email</label>
      </div>
      
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
        />
        <label htmlFor="message">Your Message</label>
      </div>
      
      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        <div className="btn-shine"></div>
      </button>
    </form>
  );
};