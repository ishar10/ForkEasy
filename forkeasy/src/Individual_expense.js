import React, { useState, useEffect } from "react";
import List from './List'
const Individual_expense = () => {
    const [data, setdata] = useState([]);
    const [phone,setphone] = useState();
    const token = sessionStorage.getItem("token")

 // Using useEffect for single rendering
 useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/friends", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
        },
    }).then((res) =>
        res.json().then((data) => {
            console.log("data===>",data.Items)
            console.log("user", data.user_phone)
            setdata(data.Items);
            setphone(data.user_phone)

        })
    );
}, []);
 
    return (
        <div className="App">
            <ul className="list-group">
                {
                    data.map(user =>( 
                       
                    <List Give_to_name={user.Give_to_name} Take_from_name = {user.Take_from_name} Amount = {user.Amount} Take_from = {user.Take_from} user_phone = {phone}></List>  
                           
                              
                    ))
                }
            
            </ul>
        </div>

    );
}

export default Individual_expense
