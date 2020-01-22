import React from 'react'
import List from './List'
import Input from './Input'


const BaseComponent = props => {

    return (
        <div className="inp" >
            <div>
                <Input
                    city={props.city}
                    idx={props.idx}
                    deleteItem={props.deleteItem}
                    inputChange={props.inputChange}
                    choiced={props.choiced}
                    deleted={props.deleted}
                    show = {props.show}
                />
                <span className="arrow" onClick={() => props.cityToggle()}>V</span>
            </div>
            <div>
                {/* // 1 ch F, arrow -> ch T, -> show, 2 choiceCity(idx) - choiced F  -> hidden*/}
                <div className={props.choiced ? 'show' : 'hidden'}>
                    <List
                        city={props.city}
                        getIndex={props.getIndex}
                        choiced={props.choiced}
                        
                    />
                    {console.log("index", props.idx)}
                    {console.log("choice", props.choiced)}
                </div>
            </div>
        </div>
    )
}


export default BaseComponent