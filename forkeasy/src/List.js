import React from 'react'

const List = (props) => {
  var flag = ''
  if(props.Take_from_name !== 'Isha Ranka')
    {
      flag = true;
    }
  else{
    flag = false;
  }
  return (
    <>
      {
      flag?(<li className="list-group-item list-group-item-primary mb-2">{props.Take_from_name} owes you {props.Amount}</li>):
      <li className="list-group-item list-group-item-primary mb-2">You owe {props.Take_from_name} {props.Amount}</li>
      }
    </>
  )
}

export default List
