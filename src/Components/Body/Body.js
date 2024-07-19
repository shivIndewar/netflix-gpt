import React, { useEffect } from 'react'
import Browse from '../Browse/Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from '../usermanagement/Login/Login'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../utils/user store/userSlice'

const Body = () => {

    const dispatch = useDispatch();

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

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged called");
            if (user) {
              // User is signed in, see docs for a list of available properties
              const {uid, email, displayName, photoURL} = user; 
              console.log("Dispatched user");
              dispatch(addUser({uid : uid, email: email, displayName : displayName, photoURL: photoURL})); 
              // ...
            } else {
              dispatch(removeUser());
            }
          });
    },[]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body