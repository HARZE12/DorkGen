import * as React from 'react';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-primary/50 bg-card/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]',
        ghost: 'text-foreground hover:bg-muted hover:text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        cyber: 'bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-secondary/30 backdrop-blur-sm',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export const Button = React.forwardRef((
  { className = '', variant, size, ...props },
  ref
) => {
  return (
    <button
      className={`${buttonVariants({ variant, size })} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';
