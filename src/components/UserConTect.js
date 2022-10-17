import React, { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthConText = createContext();
const auth = getAuth(app);

const UserConText = ({ children }) => {
  const [user, setUser] = useState(null);
  // class 4,...................................
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // class 5 ..........................
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // class 5----------------
  const logOut = () => {
    return signOut(auth);
  };

  // ata fxt corar jonno............

  const authInfo = { user, createUser, logOut, signIn };

  return (
    <div>
      <AuthConText.Provider value={authInfo}>{children}</AuthConText.Provider>
    </div>
  );
};

export default UserConText;
