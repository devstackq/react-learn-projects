import React from 'react'
import City from "./City";

 const  HistoryList = props => {
    return (
        <div>
                 {props.historyCity.map((c, index) => (
                    <City
                      key={index}
                      id={index}
                      historyCity={c}
                    //   getIndex={props.getIndex}
                    //   choiced={props.choiced}
                      showList={props.showList}
                      deleteItem={props.deleteItem}
                      cityClose={props.cityClose}
                      // changeChoice={()=>props.changeChoice()}
                      //remove click func
                    />
                  ))}
            
        </div>
    )
}

export default HistoryList