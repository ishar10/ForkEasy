import React from 'react'
import Navigation from './Navigation'
import Individual_expense from './Individual_expense'
import Flask from './Flask'
const Friends = () => {
  const token = sessionStorage.getItem("token")
  return (<>
    {(token == "" || token== undefined) ?
    <div>
      <Navigation></Navigation>
      <h1>Login to view expenses shared between your friends</h1>
      
    </div>
    :
    <div>
          <Navigation></Navigation>
          <Individual_expense></Individual_expense>
    </div>
    }
     </>
  )
 
}

export default Friends
