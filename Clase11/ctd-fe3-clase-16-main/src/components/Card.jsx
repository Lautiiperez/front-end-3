import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  return (
    
    <Link to={`/Beer/${data.id}`} className="card-link">
      <div className='card'>
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
    </div>
    </Link>
    
  )
}

export default Card