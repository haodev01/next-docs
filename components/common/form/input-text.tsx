import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface TextInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>; // The control from react-hook-form
  label: string;
  placeholder?: string;
  description?: string;
}
export const InputText = (props: TextInputProps) => {
  const { name, control, label, placeholder, description } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};
