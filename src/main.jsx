import ReactDOM from 'react-dom/client';
import { DataProvider } from './contexts/DataContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>,
);
