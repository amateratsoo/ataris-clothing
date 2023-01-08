import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ text, ...rest }: ButtonProps) {
  return (
    <button 
      className='w-full py-2 text-black bg-indigo-600 hover:brightness-110 transition-all rounded-md'
      {...rest}
    >
      {text}
    </button>
  );
}

export { Button };
