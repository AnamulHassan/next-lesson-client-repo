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
  sendEmailVerification,
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
  // State for dark and light mode
  const [dark, setDark] = useState(false);
  // State for Category Data
  const [courseCategory, setCourseCategory] = useState([]);
  // State for Category Id
  const [categoryId, setCategoryId] = useState('');
  // State For Set User
  const [user, setUser] = useState(null);
  // State For Category Navigate
  const [open, setOpen] = useState(false);
  // State For Loading Data
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // const loginWithGithub Function
  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // Login With Email And Password Function
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Delete User Account Function
  const deleteUserAccount = () => {
    return deleteUser(auth.currentUser);
  };
  // Logout User Function
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Reset User Password Function
  const resetUserPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };
  // Email Verification Function
  const verifyAccount = () => {
    return sendEmailVerification(auth.currentUser);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    fetch('https://next-lesson-server.vercel.app/category')
      .then(response => response.json())
      .then(data => setCourseCategory(data));
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
    verifyAccount,
    courseCategory,
    categoryId,
    setCategoryId,
    open,
    setOpen,
    loading,
    setLoading,
    dark,
    setDark,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
