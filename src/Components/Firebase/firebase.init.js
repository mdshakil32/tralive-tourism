import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialixeAuthentication =()=>{
    
     initializeApp(firebaseConfig);
}
export default initialixeAuthentication;