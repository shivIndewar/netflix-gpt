export const checkValidData = (email, password, username,isSignInForm)=>{
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isvalidUsername = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(username);

    // if(!isvalidUsername && !isSignInForm) return "Name is invalid";
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPassword) return "Password is not valid";
    

    return null;
}