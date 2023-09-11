import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'


const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Home/>
    }, 
    {
      path:"about",
      element: <About/>
    },
    {
      path:"contact",
      element:<Contact />
    }
   
  ]
}
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Router path='/' element={<Layout />}>

//       <Router path='' element={<Home/>} />
//       <Router path='about' element={<About/>} />
//       <Router path='contect' element={<Contact />} />

//     </Router>
//   )

// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
