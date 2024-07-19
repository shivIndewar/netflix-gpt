import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      console.log("sign out successfully");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='w-screen absolute py-6 px-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>
    
  { user && <div className='flex'>
      <img className='w-10 h-10' src={user.photoURL}  alt='userIcon' />
      <button className='text-white font-bold' onClick={handleSignOut}> (Sing Out) </button>
    </div>}
    
    </div>
  )
}

export default Header