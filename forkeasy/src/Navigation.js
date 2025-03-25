
import React from 'react'
import pic from './logo.png'
import Imagehome from './Imagehome'
const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <Imagehome name = {pic}  width = '200'></Imagehome>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <a className="nav-item nav-link active font-weight-bold h4" href="/home">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active font-weight-bold h4" href="/groups">Groups <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active font-weight-bold h4" href="/friends">Friends <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active font-weight-bold h4" href="/activity">Activity <span className="sr-only">(current)</span></a>
   

    </div>
    
  </div>
  <ul className="nav navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login</a>
      </li>
    </ul>
</nav>

  
    </div>
  )
}

export default Navigation
