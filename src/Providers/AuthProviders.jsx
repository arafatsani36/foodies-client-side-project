import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const[loding, setLoding] = useState(true);

const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
const singIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    setLoding(true);
    return signOut(auth)
}
useEffect(() => {
     const unsubscribe =   onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser);
        setLoding(false)
    })
    return() => {
       unsubscribe();
    }
},[])

const provider = new GoogleAuthProvider()


    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loding
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;