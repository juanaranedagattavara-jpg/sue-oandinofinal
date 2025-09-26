'use client';
import { useState } from 'react';

export function useContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (response.ok) { setStatus('success'); setFormData({ name: '', email: '', message: '' }); } else { setStatus('error'); setErrorMessage('Error al enviar'); }
    } catch { setStatus('error'); setErrorMessage('Error de conexión'); }
  };

  return { formData, status, errorMessage, handleChange, handleSubmit };
}
