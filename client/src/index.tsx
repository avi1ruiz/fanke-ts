import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import './styles/index.css'
import './styles/bootstrap.min.css'
import './styles/modal.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/main",
    element: <UserPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

