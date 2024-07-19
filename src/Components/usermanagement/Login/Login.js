import React, { useRef, useState } from "react";
import Header from "../../Header/Header";
import { checkValidData } from "../../../utils/validate";
import { auth } from "../../../utils/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/user store/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const handleSingInSignUp = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      username?.current?.value,
      isSignInForm
    );
    seterrorMessage(message);
    console.log("before return");
    if (message) return;
    console.log("Not returned yet");
    if (!isSignInForm) {
      console.log("calling firebase api");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: username?.current?.value, photoURL: "https://lh3.googleusercontent.com/ogw/AF2bZyjnyO4RhR-MLQDP6I-I_G97QNoJd2syQWknqDemN12ORZA=s64-c-mo"
          }).then(() => {

            const {uid, email, displayName, photoURL} = auth.currentUser; 
            dispatch(addUser({uid : uid, email: email, displayName : displayName, photoURL: photoURL}));
            navigate("/browse");
            console.log(user);
          }).catch((error) => {
            seterrorMessage(error);
          });
        })
        .catch((error) => {
          console.log(error.code + "" + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
          navigate("/browse");
          console.log("Signed In User - " , userCredential.user);
        })
        .catch((error) => {
          seterrorMessage(error.code+"-"+error.message);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt="background"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-white my-40 mx-auto left-0 right-0"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={username}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="font-bold text-lg text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={handleSingInSignUp}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
