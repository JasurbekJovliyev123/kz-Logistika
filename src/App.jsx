import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import { Home,About,Contact,Services } from './layout'
import Service from './components/Service'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/services/:id',
          element:<Service/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App
