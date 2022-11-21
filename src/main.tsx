import ReactDOM from 'react-dom/client'
import { App } from './App'
import "../src/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { UserListProvider } from './context';
// import { AppRoutes } from './components/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserListProvider>
      <App />
    </UserListProvider>
  </BrowserRouter>
)
