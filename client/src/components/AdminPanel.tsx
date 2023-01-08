import { useState, ChangeEvent, SetStateAction, FormEvent, useContext } from 'react';
import axios from 'axios';
import { Watcher } from '../contexts/WatcherContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

function AdminPanel() {
  const { setWatcher } = useContext(Watcher);
  const baseUrl = 'http://localhost:3334/create-product';

  const [panelIsActive, setPanelIsActive] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function handleChange(event: ChangeEvent, type: (value: SetStateAction<string>) => void) {
    const { value } = (event.target as HTMLInputElement);
    type(value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const response = await axios.post(baseUrl, {
      imageUrl: 
        imageUrl != '' ? imageUrl 
        : "https://teeruto.com/wp-content/uploads/2022/01/aesthetic-japanese-demon-yokai-art-oni-japan-devil-unisex-tshirtmeamp.jpg",
      name,
      price
    });

    setWatcher(prev => !prev);

    [setImageUrl, setName, setPrice]
      .forEach(item => item(''));

    return response;
  }

  return (
    <div 
      className='absolute bottom-12 right-12 flex flex-col items-end gap-6 z-50'>
      <form
        onSubmit={handleSubmit}
        className='flex-col gap-5 p-8 bg-dark-900 border border-zinc-900 rounded-sm'
        style={{ display: panelIsActive ? 'flex' : 'none' }}
      >
        <Input text={imageUrl} placeholder='http://image.com' onChange={(event) => handleChange(event, setImageUrl)} />
        <Input required text={name} placeholder='T-Shirt' onChange={(event) => handleChange(event, setName)} />
        <Input required text={price} placeholder='preço' onChange={(event) => handleChange(event, setPrice)} />

        <Button text='adicionar' />
      </form>

      <button
        onClick={() => setPanelIsActive(prev => !prev)}
        className='bg-indigo-600 w-12 h-12 rounded-full hover:rotate-45 transition-transform'
      >
        <span className='text-black text-3xl text-center'>+</span>
      </button>
    </div>
  );
}

export { AdminPanel };
