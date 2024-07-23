import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/user store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../../utils/constant";
import { toggleGPTSearchView } from "../../utils/user store/gptSlice";
import { addGlobalLanguage } from "../../utils/user store/languageSlice";
import lang from "../../utils/languageConstant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch =useSelector((store)=> store.gpt.showGPTSearch);
  const handleGptMode = () => {
    dispatch(toggleGPTSearchView());
  };
  dispatch(addGlobalLanguage(lang.en));
  const handleLanguageChange = (e) => {
    if(e.target.value ==='en'){
       dispatch(addGlobalLanguage(lang.en));
    }
    else if(e.target.value ==='hindi'){
       dispatch(addGlobalLanguage(lang.hinid));
    }
    else if(e.target.value ==='spanish'){
       dispatch(addGlobalLanguage(lang.spanish));
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-screen absolute py-6 px-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>

      {user && (
        <div className="flex p-2">

          {showGPTSearch && <select
            onChange={handleLanguageChange}
            className="p-2 m-2 bg-gray-900 text-white"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.name} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>}
          <button
            className="bg-purple-800 text-white py-2 px-2 my-2 mx-2 rounded-xl hover:bg-opacity-50"
            onClick={handleGptMode}
          >
            {showGPTSearch ? "Home Page" :  "GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-3xl"
            src={user.photoURL || USER_AVATAR}
            alt="userIcon"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            {" "}
            (Sing Out){" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
