import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './App.routes';
import { AppProvider } from '../../Context/App';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes/>
      </AppProvider>        
    </BrowserRouter>
  )
}

export default App
