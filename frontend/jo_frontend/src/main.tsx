import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider}
from "react-router-dom";
import App from './App'

import './index.css'
import './assets/css/home.css'
import './assets/css/Navbar.css'
import './assets/css/Login.css'

// Partie Context
import TokenContextProvider from "./context/TokenContextProvider";

//Navbar Page
import PageNavbar from "./page/NavBarPage";

//Page
import Home from "./page/Home"
import Login from "./page/Login"
import Catalogue from "./page/Catalogue";
import ProductForm from "./page/ProductForm";

const HeaderLayout = () => (
    <>
        <header>
            <PageNavbar />
        </header>
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        element: <HeaderLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/promotion",
                // element: <Promotion />
            },
            {
                path: "/productForm",
                element: <ProductForm />
            },
            {
                path: "/ajoutCategorie",
                // element: <Categorie />
            },
            {
                path: "/catalogue",
                element: <Catalogue />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]

    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <TokenContextProvider>
            <RouterProvider router={router} />
        </TokenContextProvider>
    </React.StrictMode>,

)

