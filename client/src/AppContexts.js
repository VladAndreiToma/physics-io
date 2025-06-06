import React, { createContext, useEffect, useState } from "react";

// Crearea contextului pentru login-ul utilizatorului
const UserLoginContext = createContext();

const UserLoginProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [username, setUserName] = useState('');
  const [userid , setUserId] = useState('');
  const [createdAt, setCreatedAt] = useState(null);

  // on first render check the local storage
  useEffect(()=>{
    const storedUser = sessionStorage.getItem("user");
    if(storedUser){
      const {username,userid,createdAt} = JSON.parse(storedUser);
      setUserName(username);
      setUserId(userid);
      setIsUserLoggedIn(true);
      setCreatedAt(createdAt);
    }
  },[]);

  const login = ( username , userid , createdAt ) => {
    setIsUserLoggedIn(true);
    setUserName( username );
    setUserId( userid );
    setCreatedAt( createdAt );
    sessionStorage.setItem("user",JSON.stringify({username,userid,createdAt}));
  }
  const logout = () =>{
    setIsUserLoggedIn(false);
    setUserName('');
    setUserId('');
    sessionStorage.removeItem( "user" );
  }

  return (
    <UserLoginContext.Provider value={{ isUserLoggedIn, 
    login, logout , username , userid , createdAt }}>
      {children} {/* Aici returnezi copiii, inclusiv aplicația */}
    </UserLoginContext.Provider>
  );
};

export default UserLoginContext;
export { UserLoginProvider };
