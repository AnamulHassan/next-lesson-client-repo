import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
// Authentication Declaration
const auth = getAuth(app);
// Authentication Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// Context Declaration
export const AuthContext = createContext({});
const UserContext = ({ children }) => {
  // State For Set User
  const [user, setUser] = useState(null);
  // Create New Account Function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User Profile Update Function
  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  // Login With Google Function
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // const loginWithGithub Function
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // Login With Email And Password Function
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log(user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  const userInfo = {
    user,
    createUser,
    updateUserProfile,
    setUser,
    signInUser,
    loginWithGoogle,
    loginWithGithub,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
