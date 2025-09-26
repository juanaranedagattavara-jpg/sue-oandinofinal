'use client';
import Link from 'next/link';
import GuideModal from './GuideModal';
import useGuideModal from '../hooks/useGuideModal';

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export default function Navigation({ isMobile = false, onItemClick }: NavigationProps) {
  const { isOpen, openModal, closeModal } = useGuideModal();
  const navItems = [
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Nosotros', href: '/#equipo' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <>
      <nav className={isMobile ? "flex flex-col space-y-4" : "flex items-center space-x-8"}>
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className={`text-sa-ink hover:text-sa-primary transition-colors font-medium ${isMobile ? 'py-2' : ''}`} onClick={onItemClick}>
            {item.name}
          </Link>
        ))}
        <button onClick={() => { openModal(); onItemClick?.(); }} className={`border-2 border-sa-primary text-sa-primary hover:bg-sa-primary hover:text-white focus:ring-sa-primary disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 ${isMobile ? 'w-full text-center' : ''}`}>
          Descarga Guía Gratuita
        </button>
      </nav>
      <GuideModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}