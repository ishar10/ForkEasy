import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
const Login = () => {
    const [phone,setPhone] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token")
    let navigate = useNavigate(); 
    
    const handleClick = () =>{
        const opts = {
            method : 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                "phone": phone,
                "password" :password
            })

        }
        fetch('/token',opts)
        .then(resp =>{
            if(resp.status === 200) return resp.json();
            else {alert("User not found, Please Sign Up");
                let path = `/signup`; 
            navigate(path); 
            }
        })
        .then(data=>{
           
            sessionStorage.setItem("token",data.access_token)
            let path = `/home`; 
            navigate(path);

        })
        .catch(error => {
            console.log("There was an error!!!!",error);
        })
    }
  return (
    <>
    <Navigation></Navigation>
    <h1>
        Login
    </h1>
    
        {(token && token != "" && token!= undefined) ?"You're logged in":
        <div>
        <input type="number" placeholder="Type phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} />
        <input type="text" placeholder="Type password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleClick}>Login</button>

    </div>
}
    </>
  )
}

export default Login
