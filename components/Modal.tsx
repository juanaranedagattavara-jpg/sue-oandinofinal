'use client';
import { useEffect } from 'react';
import Icon from './Icon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full">
        <div className="flex items-center justify-between p-6 border-b border-sa-cloud">
          <h2 className="text-2xl font-bold text-sa-ink">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-sa-cloud rounded-full transition-colors" aria-label="Cerrar modal">
            <Icon name="close" className="w-6 h-6 text-sa-ink" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}