import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}: ButtonProps) {
  
  const variants = {
    primary: 'bg-[#FF7675] text-white border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436]',
    secondary: 'bg-[#A29BFE] text-white border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436]',
    success: 'bg-[#55E6C1] text-[#2D3436] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436]',
    danger: 'bg-[#D63031] text-white border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436]',
    outline: 'bg-white text-[#2D3436] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436]',
    ghost: 'text-[#2D3436] hover:bg-[#FFEAA7] border-4 border-transparent hover:border-[#2D3436]',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5 rounded-lg',
    md: 'text-base font-medium px-4 py-2 rounded-xl',
    lg: 'text-lg font-bold px-6 py-3 rounded-2xl',
    xl: 'text-xl font-bold px-8 py-4 rounded-3xl',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
