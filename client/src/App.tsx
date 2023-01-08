import { useEffect, useState, useContext } from 'react';
import { Watcher } from './contexts/WatcherContext';
import { Header } from './components/Header';
import { Fallback } from './components/Fallback';
import { Product } from './components/Product';
import { AdminPanel } from './components/AdminPanel';
import { ProductProps } from './components/Product';
// import { api } from './api/api.example'; <- Api data shape example
import axios from 'axios';

const baseUrl = 'http://localhost:3334/get-products';

function App() {
  const [api, setApi] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const { watcher } = useContext(Watcher);

  useEffect(() => {
    (async () => {
      setLoading(true);
      
      try {
        const response = await axios.get(baseUrl);
        setApi([...response.data.data]);
      }

      catch(err) {
        console.log(err);
      }
      
      finally {
        setLoading(false);
      }

    })();
  }, [watcher]);

  return (
    <main className='h-screen w-screen bg-dark-900 relative'>
      <Header />
      <AdminPanel />
      {
        api.length === 0 && loading == false ? <Fallback message='Seja bem vindo, comece por adicionar um produto 🎉' />
        :
        <div className='h-full absolute top-0 left-0 px-8 pb-16 pt-40 z-10 overflow-y-scroll overflow-x-hidden flex flex-row flex-wrap gap-8 justify-start'>
          {api.map(product => <Product key={product.id} {...product} />)}
        </div>
      }
    </main>
  );
}

export { App };
