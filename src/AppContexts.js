import React, { createContext, useState } from "react";

// Crearea contextului pentru login-ul utilizatorului
const UserLoginContext = createContext();

const UserLoginProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [username, setUserName] = useState('');
  const [userid , setUserId] = useState('');
  const login = ( username , userid ) => {
    setIsUserLoggedIn(true);
    setUserName( username );
    setUserId( userid );
  }
  const logout = () =>{
    setIsUserLoggedIn(false);
    setUserName('');
    setUserId(''); 
  }

  return (
    <UserLoginContext.Provider value={{ isUserLoggedIn, 
    login, logout , username , userid }}>
      {children} {/* Aici returnezi copiii, inclusiv aplicația */}
    </UserLoginContext.Provider>
  );
};

export default UserLoginContext;
export { UserLoginProvider };
