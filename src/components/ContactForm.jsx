import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  Loader,
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2
          ? 'Name must be at least 2 characters'
          : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? 'Please enter a valid email address'
          : '';
      case 'subject':
        return value.trim().length < 3
          ? 'Subject must be at least 3 characters'
          : '';
      case 'message':
        return value.trim().length < 10
          ? 'Message must be at least 10 characters'
          : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFocusedField(null);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'John Smith',
      icon: User,
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@example.com',
      icon: Mail,
      required: true,
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: "Let's work together!",
      icon: MessageSquare,
      required: true,
    },
  ];

  const inputVariants = {
    focused: { scale: 1.02, borderColor: '#8b5cf6' },
    unfocused: { scale: 1, borderColor: 'rgba(255, 255, 255, 0.2)' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='glass rounded-2xl p-8 border border-white/10'
    >
      <div className='flex items-center mb-6'>
        <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4'>
          <Send size={24} className='text-white' />
        </div>
        <div>
          <h3 className='font-display text-2xl font-bold text-white'>
            Send Me a Message
          </h3>
          <p className='text-gray-400 text-sm'>
            I'll get back to you within 24 hours
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Name and Email Row */}
        <div className='grid md:grid-cols-2 gap-4'>
          {formFields.slice(0, 2).map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.name} className='space-y-2'>
                <label
                  htmlFor={field.name}
                  className='block text-sm font-medium text-gray-300'
                >
                  {field.label}{' '}
                  {field.required && <span className='text-red-400'>*</span>}
                </label>
                <div className='relative'>
                  <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                    <Icon size={18} />
                  </div>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={handleBlur}
                    variants={inputVariants}
                    animate={
                      focusedField === field.name ? 'focused' : 'unfocused'
                    }
                    className={`w-full pl-10 pr-4 py-3 bg-black/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${
                      errors[field.name]
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/20 focus:border-purple-500'
                    }`}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                  {errors[field.name] && (
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400'>
                      <AlertCircle size={18} />
                    </div>
                  )}
                </div>
                <AnimatePresence>
                  {errors[field.name] && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='text-red-400 text-xs flex items-center space-x-1'
                    >
                      <AlertCircle size={12} />
                      <span>{errors[field.name]}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Subject Field */}
        <div className='space-y-2'>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-300'
          >
            Subject <span className='text-red-400'>*</span>
          </label>
          <div className='relative'>
            <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
              <MessageSquare size={18} />
            </div>
            <motion.input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
              onFocus={() => handleFocus('subject')}
              onBlur={handleBlur}
              variants={inputVariants}
              animate={focusedField === 'subject' ? 'focused' : 'unfocused'}
              className={`w-full pl-10 pr-4 py-3 bg-black/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${
                errors.subject
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/20 focus:border-purple-500'
              }`}
              placeholder="Let's work together!"
              required
            />
            {errors.subject && (
              <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400'>
                <AlertCircle size={18} />
              </div>
            )}
          </div>
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='text-red-400 text-xs flex items-center space-x-1'
              >
                <AlertCircle size={12} />
                <span>{errors.subject}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div className='space-y-2'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-300'
          >
            Message <span className='text-red-400'>*</span>
          </label>
          <div className='relative'>
            <motion.textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              variants={inputVariants}
              animate={focusedField === 'message' ? 'focused' : 'unfocused'}
              rows={6}
              className={`w-full px-4 py-3 bg-black/20 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/20 focus:border-purple-500'
              }`}
              placeholder="Tell me about your project or just say hello! I'd love to hear from you."
              required
            />
            {errors.message && (
              <div className='absolute right-3 top-3 text-red-400'>
                <AlertCircle size={18} />
              </div>
            )}
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className='text-red-400 text-xs flex items-center space-x-1'
              >
                <AlertCircle size={12} />
                <span>{errors.message}</span>
              </motion.p>
            )}
          </AnimatePresence>
          <div className='text-right'>
            <span
              className={`text-xs ${
                formData.message.length < 10
                  ? 'text-gray-500'
                  : 'text-green-400'
              }`}
            >
              {formData.message.length}/10 minimum
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type='submit'
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 btn-glow'
          } text-white`}
        >
          {isSubmitting ? (
            <>
              <Loader size={20} className='animate-spin' />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 flex items-center space-x-2'
            >
              <CheckCircle size={20} />
              <div>
                <p className='font-medium'>Message sent successfully!</p>
                <p className='text-sm text-green-400'>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 flex items-center space-x-2'
            >
              <AlertCircle size={20} />
              <div>
                <p className='font-medium'>Failed to send message</p>
                <p className='text-sm text-red-400'>
                  Please try again or contact me directly via email.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default ContactForm;
