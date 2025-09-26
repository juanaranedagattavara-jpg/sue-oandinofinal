'use client';
import { useState } from 'react';
import Modal from './Modal';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/guide.pdf';
    link.download = 'Guia-Desarrollo-Territorial-Regenerativo.pdf';
    link.click();
    onClose();
  };

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="¡Listo!">
        <div className="text-center">
          <div className="w-16 h-16 bg-sa-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-xl font-bold text-sa-ink mb-2">¡Guía enviada!</h3>
          <p className="text-sa-ink/70 mb-4 text-sm">Revisa tu email para descargar la guía completa</p>
          <button onClick={handleDownload} className="w-full bg-sa-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-sa-primary/90 transition-colors text-sm">Descargar Ahora</button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Guía Gratuita">
      <div>
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-sa-primary rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <h3 className="text-lg font-bold text-sa-ink mb-1">Guía de Desarrollo Territorial Regenerativo</h3>
          <p className="text-sa-ink/70 text-sm">Metodologías probadas para transformar tu comunidad</p>
        </div>
        <div className="bg-sa-cloud rounded-lg p-3 mb-4">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1"><span className="text-sa-primary">✓</span><span className="text-sa-ink/80">32 páginas</span></div>
            <div className="flex items-center gap-1"><span className="text-sa-primary">✓</span><span className="text-sa-ink/80">5 casos reales</span></div>
            <div className="flex items-center gap-1"><span className="text-sa-primary">✓</span><span className="text-sa-ink/80">Herramientas prácticas</span></div>
            <div className="flex items-center gap-1"><span className="text-sa-primary">✓</span><span className="text-sa-ink/80">15 min lectura</span></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border border-sa-cloud rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent outline-none transition-colors text-sm" placeholder="Tu nombre completo" />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 border border-sa-cloud rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent outline-none transition-colors text-sm" placeholder="tu@email.com" />
          <button type="submit" disabled={isSubmitting || !formData.name || !formData.email} className="w-full bg-sa-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-sa-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">
            {isSubmitting ? 'Enviando...' : 'Descargar Guía Gratis'}
          </button>
        </form>
        <p className="text-xs text-sa-ink/50 text-center mt-3">Sin spam. Cancela cuando quieras.</p>
      </div>
    </Modal>
  );
}