import React from 'react'
import '../App.css'

const ListData = props => {
  return (

    <div>
      <ul className="list-group">
 
      <li  className={!props.choiced ? '' : 'list-group-item act'} key={props.index}
        onClick={() => props.getIndex(props.id)}
      >
        {props.city.name}
      </li>
      </ul>
    </div>
  )
}

export default ListData;