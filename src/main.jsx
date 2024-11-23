import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Blogs from "./pages/Blogs.jsx"
import CreateBlog from "./pages/CreateBlog.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>,
      },
      {
        path: '/blogs/all',
        element: <Blogs/>,
      },
      {
        path: '/create/new',
        element: <CreateBlog/>,
      },
      {
        path: '/update/:postId',
        element: <CreateBlog/>,
      },
      {
        path: '/user/:userId',
        element: <Dashboard/>,
      },      
      {
        path: '/blog',
        element: <Blog/>,
      },      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
