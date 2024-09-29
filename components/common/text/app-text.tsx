import { cn } from '@/lib/utils';
import React from 'react';

interface AppTextProps {
  variant?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const defaultClasses: Record<string, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-xlgl font-bold text-neutral-900 dark:text-white',
  h4: 'text- font-normal',
  p: 'text-base dark:text-neutral-400 text-neutral-500',
  a: 'text-base text-neutral-900 dark:text-white hover:text-primary dark:hover:text-primary cursor-pointer',
};
export const AppText = (props: AppTextProps) => {
  const { variant: Tag = 'p', children, className } = props;
  const combinedClassName = cn(defaultClasses[Tag], className);

  return <Tag className={combinedClassName}>{children}</Tag>;
};
