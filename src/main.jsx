import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './components/Pages/Home';
import Insert from './components/Pages/Insert';
import List from './components/Pages/Listar';
import Remover from './components/Pages/Remover';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inserir",
        element: <Insert />,
      },
      {
        path: "/listar",
        element: <List />,
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