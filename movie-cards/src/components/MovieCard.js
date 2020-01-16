import React from 'react';

const MovieCard = props => {

   const changeStyle = (value) => {
        this.setState({
            value: 'card2'
        })
        console.log("dd")
    }

     {/* <button onClick={this.props.changeStyle()} >
                        change style
                  </button> */}

// json-> state-> props List -> Card props -> render
    return (
        < div>
            <div className="card" >
                <img src={props.movie.imageUrl} />
                <div>
                    <p>{props.styleToggle}</p>
                    <h4> {props.movie.title} </h4>
                    <h6> {props.movie.subtitle}</h6>
                    <p>{props.movie.description}</p>
               
                </div>
            </div>
        </div >
    )
}

export default MovieCard