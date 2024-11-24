
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { BlogPostsProvider } from './context/blogPostsContext'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
        <BlogPostsProvider>
          <Header/>
          <Outlet/>
          <Footer/>
        </BlogPostsProvider>
    </>
  )
}

export default App
