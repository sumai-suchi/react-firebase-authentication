import { GoogleAuthProvider, signOut } from "firebase/auth";
import {signInWithPopup} from "firebase/auth"
import auth from "../../Firebase/firebase.init";
import { useState } from "react";


const Logged = () => {
    
    const provider=new GoogleAuthProvider()
      const [user,setUser]=useState(null)
    const handleGoogleSingIn=()=>
    {
        console.log('handle google')

        signInWithPopup(auth,provider)
        .then((result)=>{
            console.log(result)
            setUser(result.user)
        })
        .catch(error=>{
            console.log('Error',error)
            setUser(null)
        })
    }


const handleSignOut=()=>
{
    signOut(auth)
    .then(()=>
    {
        console.log('sing out done')
        setUser(null)
    })
    .catch((error)=>
    {
         console.log(error)
    })
}

    return (
        <div>
             
           

            {

                user ?<button onClick={handleSignOut}>Sign out</button>
                :  <button onClick={handleGoogleSingIn}> Logged In</button>
            }

             {
                user && <div>

                    <h4>{user.displayName}</h4>
                    <p>Name:{user.email}</p>
                    
                </div>
             }
             
        </div>
    );
};

export default Logged;