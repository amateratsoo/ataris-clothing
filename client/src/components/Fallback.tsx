function Fallback({ message }: { message: string }) {
  return (
    <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-md border-2 border-zinc-800 p-4 border-dashed rounded-md text-gray-300'>
      <span>{message}</span>
    </div>
  );
}

export { Fallback };
