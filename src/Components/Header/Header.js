import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../../utils/user store/userSlice';
import { LOGO, USER_AVATAR } from '../../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const {uid, email, displayName, photoURL} = user; 
          dispatch(addUser({uid : uid, email: email, displayName : displayName, photoURL: photoURL})); 
          navigate("/browse");
          
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      return ()=> unsubscribe();
},[]);


  const handleSignOut =()=>{
    signOut(auth).then(() => {
      console.log("sign out successfully");
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='w-screen absolute py-6 px-4 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO} alt='logo'></img>
    
  { user && <div className='flex'>
      <img className='w-10 h-10 rounded-3xl' src={user.photoURL || USER_AVATAR}  alt='userIcon' />
      <button className='text-white font-bold' onClick={handleSignOut}> (Sing Out) </button>
    </div>}
    
    </div>
  )
}

export default Header