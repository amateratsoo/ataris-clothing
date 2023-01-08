import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  text: string;
}

function Input({ placeholder, text, ...rest }: InputProps) {
  return (
    <input
      className='w-full py-2 text-gray-300 placeholder:text-zinc-800 border border-zinc-800 bg-zinc-900 rounded-sm pl-4'
      type="text" 
      value={text}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export { Input };