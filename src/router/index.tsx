import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'

import MainLayout from '../layouts/MainLayout'
import ShowLayout from '../layouts/ShowLayout'
import NotFound from '../pages/NotFound'
import ArticlesList from '../pages/ArticlesList/ArticlesList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'show',
        element: <ShowLayout />,
        children: [
          { path: 'home', element: <div>Home</div> },
          { path: 'about', element: <div>About</div> },
          { path: 'article', element: <ArticlesList /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFound /> },
])

export default router
