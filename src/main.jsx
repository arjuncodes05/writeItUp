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
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { AuthProvider } from './context/authContext.jsx'
import About from './pages/About.jsx'

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
        path: '/about',
        element: <About/>,
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
  },
  {
    path: '/login',
    element: <Login/>,
  },      
  {
    path: '/signup',
    element: <Signup/>,
  }, 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  </StrictMode>,
)
