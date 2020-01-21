import React from 'react'
import '../App.css'

const ListData = props => {
  return (
    <div>
      <li className="list-item" key={props.index}
        onClick={() => props.getIndex(props.id)}
        >
        {props.city.name}
      </li>
    </div>  
  )
}

export default ListData;