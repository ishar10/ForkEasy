import React from 'react'
import Navigation from './Navigation'
import List from './List'
const Activity = () => {
  return (
    <div>
          <Navigation></Navigation>
          <ul className="list-group">
            <List name='Isha paid 300'></List>
            <List name='Abhishekh created group badminton'></List>
            <List name='Vanshika created group Pottery'></List>
            </ul>
    </div>
  )
}

export default Activity
