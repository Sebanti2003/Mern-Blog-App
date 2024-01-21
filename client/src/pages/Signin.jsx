import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Oauth from '../components/Oauth';
const Signin = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [error,seterror]=useState("")
  const body={email,password};
  const [loading,setloading]=useState(false);
  const navigate=useNavigate();
console.log(body);
  const postbody=async(e)=>{
    e.preventDefault();
    setloading(true);
    try {
      const res=await fetch('/api/users/post/signin',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
      });
      const data=await res.json();
      if(data.status===404){
        return seterror(data.message);
      }
      seterror(null);
      setloading(false);
      navigate('/');
    } catch (error) {
      seterror(error);
      setloading(false);
    }finally{
      setloading(false);
    }

  }
  return (
    <div className="w-screen h-screen dark:bg-slate-800 flex justify-center items-center flex-col lg:flex-row font-serif max-lg:pt-16 gap-5 p-2">
      <div className="flex flex-col gap-5 w-[30%]  p-2 max-lg:w-[80%]">
        <div className="flex items-center text-4xl">
          <span className="p-2 px-2  text-white pl-12  bg-gradient-to-r from-blue-500 to-pink-600 rounded-full">
            Sebi&apos;s
          </span>
          <p className=" dark:text-pink-200">Blogs</p>
        </div>
        <div className="dark:text-blue-100">This is a demo project you can signin with your email and password and also complete your authentication with the help of Google.</div>
      </div>
      <form onSubmit={postbody} className="w-[30%]  max-lg:w-[80%] h-[60%]  flex flex-col justify-center items-center lg:mt-24 p-2 gap-5">
        <div className="flex dark:text-white w-full flex-col gap-2">
        <label id='email' htmlFor="email">Email</label>
        <input id='email' name='email' onChange={(e)=>setemail(e.currentTarget.value)}  className="w-[100%] text-black rounded-lg pr-10" placeholder="Enter your Email" type="email" />
        </div>
        <div className="flex dark:text-white w-full flex-col gap-2">
        <label id='password' htmlFor="password">Password</label>
        <input id='password' name='password' onChange={(e)=>setpassword(e.currentTarget.value)} className="w-[100%] text-black rounded-lg pr-10" placeholder="Enter your Password" type="password" />
        </div>
        <button disabled={loading} type="submit" className="text-white px-28 dark:text-white bg-gradient-to-r ml-3 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2">{loading?<p>Loading...</p>:<p>Log In</p>}</button>
        <Oauth/>
        <div className="dark:text-white">Still not registered yet? <Link to="/signup" className="cursor-pointer text-blue-700">SignUp</Link></div>
        <span className='text-red-700'>{error}</span>
       
      </form>
    </div>
  );
}

export default Signin
