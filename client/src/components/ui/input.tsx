import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  theme?: 'light' | 'dark';
  labelClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, labelClassName, id, theme = 'light', ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
    const isDark = theme === 'dark';
    
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className={cn("block text-xs font-semibold uppercase tracking-wider", isDark ? "text-white/70" : "text-[#6B7280]", labelClassName)}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'block w-full rounded-md px-3.5 py-2.5 text-sm transition-all duration-150',
            isDark 
              ? 'bg-surface-alt/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-surface-card disabled:text-white/40'
              : 'border border-[#3730A3]/15 text-[#111827] bg-white placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#3730A3]/60 focus:ring-2 focus:ring-[#3730A3]/15 disabled:bg-[#F8F7FF] disabled:text-[#6B7280]',
            'disabled:cursor-not-allowed',
            error && (isDark ? 'border-red-500 focus:ring-red-500/20' : 'border-[#DC2626] focus:ring-[#DC2626]/15'),
            className
          )}
          {...props}
        />
        {hint && !error && <p className="text-xs text-[#6B7280]">{hint}</p>}
        {error && <p className="text-xs text-[#DC2626]">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  theme?: 'light' | 'dark';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, theme = 'light', ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
    const isDark = theme === 'dark';
    
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className={cn("block text-xs font-semibold uppercase tracking-wider", isDark ? "text-white/70" : "text-[#6B7280]")}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'block w-full rounded-md px-3.5 py-2.5 text-sm resize-none transition-all duration-150',
            isDark 
              ? 'bg-surface-alt/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-surface-card disabled:text-white/40'
              : 'border border-[#3730A3]/15 text-[#111827] bg-white placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#3730A3]/60 focus:ring-2 focus:ring-[#3730A3]/15 disabled:bg-[#F8F7FF] disabled:text-[#6B7280]',
            error && (isDark ? 'border-red-500 focus:ring-red-500/20' : 'border-[#DC2626] focus:ring-[#DC2626]/15'),
            className
          )}
          {...props}
        />
        {hint && !error && <p className="text-xs text-[#6B7280]">{hint}</p>}
        {error && <p className="text-xs text-[#DC2626]">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
