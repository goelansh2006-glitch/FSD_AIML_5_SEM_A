import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const navigate=useNavigate();
    function handleSubmit(){
        if(uname=="admin" && pass=="manager"){
            navigate("/admin")
        }
        else if(uname=="user" && pass=="abes"){
            navigate("/user")
        }
        else{
             alert("Credentials are incorrect")
    }
}
  return (
    <div>
      <h1> LOGIN PAGE </h1>
      <form onSubmit={handleSubmit}>
        <label>Uname</label>
        <input type="text"
                name="uname"
                placeholder="Enter User Name"
                value={uname}
                onChange={(e)=>setUname(e.target.value)}/>
                <br/>
                <label>Pass</label>
        <input type="password"
                name="pass"
                placeholder="Enter Password"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}/>
                <br/>
                <button type='submit'>Login</button>
                <button type='reset'>Reset</button>
                <br/>
      </form>
    </div>
  )
}

export default Login
