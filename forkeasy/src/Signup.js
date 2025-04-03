import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Signup = () => {
    const [phone,setPhone] = useState("");
    const [password, setPassword] = useState("");
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
        fetch('/signupuser',opts)
        .then(resp =>{
            if(resp.status === 200) return resp.json();
            else {alert("User already exist! Please login.")
            };
        })
        .then(data=>{
            if(data != undefined){
            alert('Signed up successfully. Kindly login.')
            }
            let path = `/login`; 
            navigate(path);

        })
        .catch(error => {
            console.log("There is an error!!!!",error);
        })
    }
  return (
    <>
    <Navigation></Navigation>
    <h1>
        Sign up
    </h1>
        <input type="number"  placeholder="Type phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} />
        <input type="text" placeholder="Type password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleClick}>Sign up</button>
    </>
  )
}

export default Signup
