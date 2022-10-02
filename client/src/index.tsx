import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/home';
// Elemento donde se colocaran componentes

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

