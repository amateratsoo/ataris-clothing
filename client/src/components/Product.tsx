import { useContext } from 'react';
import axios from 'axios';
import { Watcher } from '../contexts/WatcherContext'
import { TrashSimple } from 'phosphor-react';

export interface ProductProps {
  id?: string | number;
  imageUrl: string;
  name: string;
  price: string;
}

const baseUrl = 'http://localhost:3334/delete-product';

function Product({ id, imageUrl, name, price }: ProductProps) {
  const { setWatcher } = useContext(Watcher);

  async function deleteProduct() {
    const response = await axios.delete(baseUrl, {
      data: {
        id
      }
    })
    
    setWatcher(prev => !prev);
  }

  return (
    <div className='group flex flex-col bg-zinc-900 border border-zinc-800 w-72 h-72 rounded-md overflow-hidden group'>
      <div className='flex-[2] overflow-hidden'>
        <img src={imageUrl} />
      </div>

      <div className='flex-[1.5] flex flex-col align-start justify-center pl-6 gap-4'>
        <span className='text-lg font-semibold text-gray-300'>{name}</span>
        
        <div className='flex items-center justify-between'>
          <span className='mt-2 bg-emerald-700 w-fit rounded-md p-2'>
            {new Intl.NumberFormat('ao-AO', { style: 'currency', currency: 'AKZ' }).format(Number(price))}
          </span>

          <button 
            className='mr-4 mb-1 self-end hidden group-hover:inline cursor-pointer transition-all'
            onClick={deleteProduct}
          >
            <TrashSimple size={24} weight='duotone' />
          </button>
        </div>
      </div>
    </div>
  );
}

export { Product };
