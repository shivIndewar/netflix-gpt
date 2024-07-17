import React, { useState } from 'react'
import Header from '../../Header/Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const  toggleSignIn =()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg' alt='background' ></img>
        </div>
        <form className='absolute w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-white my-40 mx-auto left-0 right-0'>
            <h1 className='text-3xl font-bold py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />} 
            <input type='text' placeholder='Email or Mobile number' className='p-4 my-4 w-full bg-gray-700' />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>

        </form>
    </div>
    
  )
}

export default Login