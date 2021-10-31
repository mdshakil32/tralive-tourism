import { useState } from "react";
import initialixeAuthentication from "../Components/Firebase/firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect } from "react";

initialixeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google login 
    const loginWithGoogle =()=>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    // auth change 
    useEffect(()=>{
        
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false)
          });
          return ()=> unsubscribed;
    },[])

    // logout 
    const Logout = ()=>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {})
        .finally((error) => {
            console.log(error);
            setIsLoading(false)
          });
    }

    return{
        loginWithGoogle,
        user,
        setUser,
        error,
        Logout,
        isLoading,
        setIsLoading    
    }    
}
export default useFirebase;
