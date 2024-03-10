import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthDetails } from "../store/authSlice";
import { loginApiCall } from "../services/authService";

const SIGNUP = 'SIGNUP'
const LOGIN = 'LOGIN'

const Login = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formStatus, setFormStatus] = useState(LOGIN)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSignup = async ()=>{
    if(!email || !password) return console.log('no email or password')

    if(formStatus == SIGNUP){
      console.log('signup')
    }
    if(formStatus == LOGIN){
      const res = await loginApiCall({email, password});
      if(res && res.status == 200){
        dispatch(setAuthDetails(res.data))
        navigate("/")
      }
      
    }
  }

  const guestLogin = async ()=>{

  }

  return(
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-bg1 text-tc2">
      <div className="bg-bg2 rounded-xl w-[450px] flex flex-col items-center p-8">
        <img src="logos/cafe-table-transparent.png" alt="logo" className="w-[200px]" />
        <div className="bg-bg1 flex px-1 py-1 rounded-lg mt-2">
          <button onClick={()=> setFormStatus(LOGIN)} className={`rounded-md px-2 py-2 w-[100px] text-center ${formStatus == LOGIN && 'bg-bg2'}`}>Login</button>
          <button onClick={()=> setFormStatus(SIGNUP)} className={`rounded-md px-2 py-2 w-[100px] text-center ${formStatus == SIGNUP && 'bg-bg2'}`} >Signup</button>
        </div>
        <div className="flex w-full flex-col mt-3">
          <div className="flex flex-col">
            <label className="text-lg px-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-bg1 border border-tc1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-lg px-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="bg-bg1 border border-tc1 focus:outline-0 active:outline-0 px-3 py-2 rounded-md" />
            <div className="text-right bg-red mt-2">
              <button className="text-sm text-tc1">Forgot password?</button>
            </div>
          </div>
          <button onClick={loginSignup} className="bg-bg1 py-3 rounded-md mt-6">{formStatus == LOGIN ? 'Log in' : 'Sign up'}</button>
        </div>
      </div>
      <button className="mt-8 bg-bg2 px-5 py-2 rounded-md" onClick={guestLogin}>
        Guest Login
      </button>
    </div>
  )
}

export default Login;