import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

export function Card({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("bg-white border-4 border-[#2D3436] rounded-[24px] shadow-[8px_8px_0px_0px_#2D3436] overflow-hidden", className)} 
      {...props}
    >
      {children}
    </motion.div>
  );
}
