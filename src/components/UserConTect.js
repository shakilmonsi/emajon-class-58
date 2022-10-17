import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthConText = createContext();
const auth = getAuth(app);

const UserConText = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // class 4,...................................
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // class 5 ..........................
  const signIn = (email, password) => {
    // 8';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // class 5----------------
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", currentUser);
      setUser(currentUser);
      // 8......................
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ata fxt corar jonno............

  const authInfo = { user, createUser, logOut, signIn, loading };

  return (
    <div>
      <AuthConText.Provider value={authInfo}>{children}</AuthConText.Provider>
    </div>
  );
};

export default UserConText;
