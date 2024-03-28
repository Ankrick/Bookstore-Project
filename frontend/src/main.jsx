import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import CreateBook from './pages/CreateBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import EditBook from './pages/EditBook.jsx';
import Info from './pages/Info.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "/books/create",
        element: <CreateBook/>
      },
      {
        path: "/books/delete/:id",
        element: <DeleteBook/>
      },
      {
        path: "/books/edit/:id",
        element: <EditBook/>
      },
      {
        path: "/books/info/:id",
        element: <Info/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
