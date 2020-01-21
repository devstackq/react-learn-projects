import React from 'react'

const Input = props => {


    // <input onChange={(e) => this.changeCarsValueP(e.target.value, 1)} />
    return (
        <div>
            <form onSubmit={(e) => props.deleteItem(e)} >
                <input className="input"
                    name="city" type="text" value={props.city[props.idx].name || ''}
                // ref={props.city[props.idx]}
                />
                {/* <span onClick={()=>props.deleteItem( props.idx)}> x</span> */}
                <button type="submit">x</button>
                {console.log(props.idx)}
            </form>
        </div>
    )
}

export default Input

// deleteCityParent=(e) =>{
//     e.preventDefault()
//     this.setState({
//         cities: 0
//     })
//     // this.refs.form.reset();
// }

// e.preventDefault();
// let newCity = [...this.state.cities]
// newCity = newCity[idx]
// newCity = 0
// this.setState({
//     cities: newCity
// })