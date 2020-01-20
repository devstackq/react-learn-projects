import React from 'react'
import Data from './Data'

const ListData = props => {
    return (
        <div>
          {  props.listVal.map(city=> <Data  nameCity={city} />) }
        </div>
    )
}
export default ListData;