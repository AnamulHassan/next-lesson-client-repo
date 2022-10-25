import React, { createContext, useState } from 'react';
export const AuthContext = createContext({});
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const userInfo = { user };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
