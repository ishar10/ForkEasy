
import React from 'react'

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">forkYeasy</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active" href="/groups">Groups <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active" href="/friends">Friends <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link active" href="/activity">Activity <span className="sr-only">(current)</span></a>
   

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
