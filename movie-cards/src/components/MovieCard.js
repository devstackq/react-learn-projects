import React from 'react';


// const divStyle = {
//     margin: '40px',
//     border: '5px solid pink'
// };
// const pStyle = {
//     fontSize: '15px',
//     textAlign: 'center'
// };



// changeStyle ? pStyle : ""


const MovieCard = props => {


    // props.styleToggle === true {
    //     console.log("toggle style 1 stage")
    // }
    const changeStyle = props => {  
        props.styleToggle = true
        console.log("toggle value change, and then need, change")
    }
    return (
        
        < div>
          <p>{this.props.open}</p>
            <div className="card" >
                <img src={props.movie.imageUrl} />
                <div>
                    <h4> {props.movie.title} </h4>
                    <h6> {props.movie.subtitle}</h6>
                    <p>{props.movie.description}</p>
                    {/* // <button onClick={this.props.changeStyle} className="btn"> info</button> */}
                    <button
                        onClick={props.changeStyle} >
                        change test style
                       </button>
                     
                </div>
            </div>
        </div >
    )
}

export default MovieCard