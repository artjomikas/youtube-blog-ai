import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGithub = async () => {
    const githubUser = await signInWithPopup(auth, new GithubAuthProvider());
    return githubUser;
  };

  const signInWithGoogle = async () => {
    const googleUser = await signInWithPopup(auth, new GoogleAuthProvider());
    return googleUser;
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        setUserId(currentUser.uid);

        setUser({
          _id: currentUser.uid,
          username:
            currentUser.reloadUserInfo.screenName !== undefined
              ? currentUser.reloadUserInfo.screenName
              : "",
          imageURL: currentUser.photoURL,
          name: currentUser.displayName,
          email: currentUser.email,
          provider: currentUser.providerData[0].providerId.slice(0, -4),
        });

        setInitializing(false);
      } else {
        setUser(null);
        setInitializing(false);
        setUserId(null);
      }
    });
  }, []);

  if (initializing) return null;

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        signInWithGithub,
        signInWithGoogle,
        resetPassword,
        user,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
