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
  updateEmail,
  deleteUser,
  signOut,
  sendPasswordResetEmail,
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
  // User Email Update Function
  const updateUserEmail = email => {
    return updateEmail(auth.currentUser, email);
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
  // Delete User Account Function
  const deleteUserAccount = () => {
    return deleteUser(auth.currentUser);
  };
  // Logout User Function
  const logoutUser = () => {
    return signOut(auth);
  };
  // Reset User Password Function
  const resetUserPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      // console.log(user);
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
    updateUserEmail,
    deleteUserAccount,
    logoutUser,
    resetUserPassword,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
