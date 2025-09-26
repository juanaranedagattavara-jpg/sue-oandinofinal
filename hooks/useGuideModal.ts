'use client';
import { useState } from 'react';

export default function useGuideModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => { setIsOpen(false); setFormData({ name: '', email: '' }); setStatus('idle'); setErrorMessage(''); };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/guide', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (response.ok) { setStatus('success'); } else { setStatus('error'); setErrorMessage('Error al suscribirse'); }
    } catch { setStatus('error'); setErrorMessage('Error de conexión'); }
  };

  return { isOpen, openModal, closeModal, formData, status, errorMessage, handleChange, handleSubmit };
}
