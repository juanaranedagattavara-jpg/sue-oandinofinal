'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', disabled = false, onClick, type = 'button' }: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-sa-primary text-white hover:bg-sa-primary/90 focus:ring-sa-primary disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 border-sa-primary text-sa-primary hover:bg-sa-primary hover:text-white focus:ring-sa-primary disabled:opacity-50 disabled:cursor-not-allowed'
  };
  const sizeClasses = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3', lg: 'px-8 py-4 text-lg' };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return <button type={type} className={classes} disabled={disabled} onClick={onClick}>{children}</button>;
}