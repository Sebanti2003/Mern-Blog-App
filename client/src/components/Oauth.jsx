import {Button} from 'flowbite-react'
import { FaGoogle } from "react-icons/fa";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
const Oauth = () => {
  const navigate=useNavigate();
    const auth=getAuth(app);
    const googleauth=async()=>{
        
        const provider=new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'});
        try {
            var results=await signInWithPopup(auth,provider);
        } catch (error) {
            console.log(error);
        }
        const reqbody={...results.user};
        const res=await fetch('/api/google/post',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(reqbody)
        });
        const data=await res.json();
        console.log(data.body);
        navigate('/')
    }

  return (
    <div>
      <Button type='button' onClick={googleauth} outline gradientDuoTone='pinkToOrange' className='w-72 flex items-center'>
      <FaGoogle className='mr-3'/>
      <p>Continue with Google</p>
      </Button>
    </div>
  )
}

export default Oauth
