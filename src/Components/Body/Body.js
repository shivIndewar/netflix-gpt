import React from 'react'
import Browse from '../Browse/Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from '../usermanagement/Login/Login'

const Body = () => {

  

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login />
        },
        {
            path:"/browse",
            element: <Browse />
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body