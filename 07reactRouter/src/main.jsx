import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './Layout';
import Home from './components/components/Home/Home';
import About from './components/components/About/About';
import Contact from './components/components/Contact/Contact'
import User from './components/components/User/User'
import Github from './components/components/Github/Github';
import {githubInfoLoader} from './components/components/Github/Github.jsx'

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={githubInfoLoader}
      path='github'  element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
