import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route , createBrowserRouter , createRoutesFromElements , RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route 
        loader={githubInfoLoader}
        path='github'
        element={<Github />} 
      />
      <Route path='user/:id' element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
