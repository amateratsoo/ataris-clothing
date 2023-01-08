import ReactDOM from 'react-dom/client';
import { App } from './App';
import { WatcherContext } from './contexts/WatcherContext';
import './index.css';
import './configs.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WatcherContext>
    <App />
  </WatcherContext>
)
