import ReactDOM from 'react-dom/client'
import { App } from './App'
import "@/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { UserListProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserListProvider>
      <App />
    </UserListProvider>
  </BrowserRouter>
)
