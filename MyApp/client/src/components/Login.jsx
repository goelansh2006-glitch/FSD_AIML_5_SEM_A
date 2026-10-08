import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const [message,setMessage] = useState("");
    const navigate=useNavigate();
    function handleLogin(e){
        e.preventDefault();
        if(uname==="admin" && pass==="manager"){
            navigate("/admin")
        }
        else if(uname==="user" && pass==="abes"){
            navigate("/user")    
        }
        else{
            setMessage("Error: check credentials.")
            navigate("/")
        }

    }
  return (
    <div>
      <div className="Login">
        <h1>SignIn</h1>
        <h2 style={{color:"red"}}>{message}</h2>
        <form onSubmit={handleLogin}>
            UserName:
            <input type="text"
                    value={uname}
                    placeholder="Enter the User Name"
                    onChange={(e)=> setUname(e.target.value)}/>
                    <br/>
            Password:
            <input type="password"
                   value={pass}
                   placeholder="Enter the Password"
                   onChange={(e)=>setPass(e.target.value)}/>
                   <br/>
            <button> SignIn </button>
            <button> Reset </button>       
        </form>
      </div>
    </div>
  )
}

export default Login