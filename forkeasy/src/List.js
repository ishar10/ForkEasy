import React from 'react'

const List = (props) => {
  var outer_flag = ''
  if(props.which === 'IndividualExpense')
    {
      outer_flag = true;
    }
  else{
    outer_flag = false;
  }
  var flag = ''
  if(props.Take_from !== props.user_phone)
    {
      flag = true;
    }
  else{
    flag = false;
  }
  return (
    <>
      {
      outer_flag?(
      flag?(<li className="list-group-item list-group-item-primary mb-2">{props.Take_from_name} owes you {props.Amount}</li>):
      <li className="list-group-item list-group-item-primary mb-2">You owe {props.Give_to_name} {props.Amount}</li>
      ):
      
        <li className="list-group-item list-group-item-primary mb-2" onClick={() => {props.onItemClick()}}>{props.name}</li>
      
      }
    </>
  )
}

export default List