import logo from '../assets/vercel.svg';

function Header() {
  return (
    <header 
      className='w-screen backdrop-blur-md py-8 pl-24 flex align-center border-b border-b-zinc-900 bg-[rgba(18, 18, 20, .94)] z-[11] relative'>
      <div className='flex align-center gap-4'>

        <a href="" className='w-8 h-8'>
          <img
            src={logo} 
            alt=""
            className='object-cover'
          />
        </a>

        <h1 className='text-gray-200 text-2xl font-semibold font-sans'>
          Atari's Clothing
        </h1>
      </div>
    </header>
  );
}

export { Header };
