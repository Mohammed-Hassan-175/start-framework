import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Portfolio', element: <Portfolio /> },
      { path: 'Contact', element: <Contact /> }


    ]
  },

])

export default function App() {
  const [count, setCount] = useState(0)

  return <>
    <RouterProvider router={x}></RouterProvider>
  </>

}




