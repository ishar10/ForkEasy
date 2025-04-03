import React from 'react'
import Navigation from './Navigation'
import List from './List'
const Activity = () => {
  const token = sessionStorage.getItem("token")
  return (<>
    {(token == "" || token== undefined) ?
    <div>
      <Navigation></Navigation>
      <h1>Login to view your expense history</h1>
      
    </div>:
    <div>
          <Navigation></Navigation>
          <ul className="list-group">
            <List name='Isha paid 300'></List>
            <List name='Abhishekh created group badminton'></List>
            <List name='Vanshika created group Pottery'></List>
            </ul>
    </div>
}</>

  )
}

export default Activity
