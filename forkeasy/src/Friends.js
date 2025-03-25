import React from 'react'
import Navigation from './Navigation'
import List from './List'
const Friends = () => {
  return (
    <div>
          <Navigation></Navigation>
          <ul className="list-group">
            <List name='Isha'></List>
            <List name='Abhishekh'></List>
            <List name='Vanshika'></List>
            <List name='Shad'></List>
            <List name='Muskan'></List>
            <List name='Janvi'></List>
            </ul>
    </div>
  )
}

export default Friends
