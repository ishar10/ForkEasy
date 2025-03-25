import React from 'react'

const Card = (props) => {
  return (
    
      <div className="card ml-3 mt-5" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
    <p className="card-text">{props.text}</p>
    <a href="#" className="card-link">Open</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    
  )
}

export default Card
