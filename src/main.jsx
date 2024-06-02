import ReactDOM from 'react-dom/client';
import { DataProvider } from './contexts/DataContext.jsx';
// import { ThemeProvider } from './contexts/ThemeContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ThemeProvider>
  <DataProvider>
    <App />
  </DataProvider>,
  // </ThemeProvider>,
);
