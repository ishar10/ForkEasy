import React from 'react'
import './App.css';
import List from './List';
import { useNavigate } from "react-router-dom";

const GroupsFriends = (props) => {
    let navigate = useNavigate(); 
    // console.log("filteredNamesDict===>", props.filteredNamesDict)
    // console.log("type of filteredNamesDict==>",typeof(props.filteredNamesDict))
    const add_expense_2 =(name,phone)=>{
        let path = `/add_expense/${name}/${phone}`; 
        console.log("path==>",path)
        navigate(path);
      }
  return (
    <div class="container mt-4">
    <div class="row">
        
        <div class="col-md-6">
            <h5 class="text-center">Groups</h5>
            <div class="scrollable-section">
                <ul class="list-group">
                   
                {/* {props.filteredGroups.map(name => (
                
                <List which = 'AddExpense' name = {name} key = {name} onItemClick={() =>add_expense_2(0,0)}></List>
                ))} */}
                {Object.entries(props.filteredGroupsDict).map(([phone, name]) => (
                <List
                    which="AddExpense"
                    name={name}
                    key={phone}
                    onItemClick={() => add_expense_2(name, phone)}
                />
                ))}
                </ul>
            </div>
        </div>

       
        <div class="col-md-6">
            <h5 class="text-center">Friends</h5>
            <div class="scrollable-section">
                <ul class="list-group">

            {/* {props.filteredNames.map((name,index) => (
                
                    <List which = 'AddExpense' name = {name} key = {index} onItemClick={() =>add_expense_2(name,props.phones[index])} ></List>
                    ))} */}
            {Object.entries(props.filteredNamesDict).map(([phone, name]) => (
                <List
                    which="AddExpense"
                    name={name}
                    key={phone}
                    onItemClick={() => add_expense_2(name, phone)}
                />
                ))}
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default GroupsFriends


