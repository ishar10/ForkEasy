import React from 'react'
import Imagehome from './Imagehome';
import Navigation from './Navigation';
import Button from './Button';
import pic from './Coinsplit.png'
const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
     <Imagehome name = {pic} width = '500'></Imagehome>
     <Button></Button>
    </div>
  )
}

export default Home
