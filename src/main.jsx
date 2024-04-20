import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Insert from './components/Pages/Insert';
import Edit from './components/Pages/Edit';
import List from './components/Pages/Listar';
import Remover from './components/Pages/Remover';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "/inserir",
        element: <Insert />,
      },
      {
        path: "/editar",
        element: <Edit />,
      },
      {
        path: "/remover",
        element: <Remover />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);