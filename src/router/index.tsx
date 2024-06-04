import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'

import MainLayout from '../layouts/MainLayout'
import ShowLayout from '../layouts/ShowLayout'
import NotFound from '../pages/NotFound'
import ArticlesList from '../pages/ArticlesList/ArticlesList'
import About from '../pages/Aoubt/About'
import Categories from '../pages/Categories/Categories'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'show',
        element: <ShowLayout />,
        children: [
          { path: 'about', element: <About /> },
          { path: 'categories', element: <Categories /> },
          { path: 'article', element: <ArticlesList /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
])

export default router
