import React from 'react';
import MovieCard from './MovieCard'
import './style.css'


const MovieList = props => (
    <div>
        {getMovies(props.movies)}
    </div>
)

const getMovies = movies => {
    return (
        <div className="wrapper-list">


            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
            
        </div>
        
    )
}


export default MovieList
