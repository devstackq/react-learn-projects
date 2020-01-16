import React from 'react';
import MovieList from './MovieList'
import MovieService from '../services/MovieService'
import '../App.css'

 class Movies extends React.Component {
    state = {
        movies: [],
    }


  
changeStyleData = (value) => {
    this.setState({
        customStyle : value
    })
}
  // 1 MovieService, get Data, from json file, set data movies array
  //2 data - send MovieList, movie list take data, from parent comp, and Map -> 
  // create Each Card, write data, then render
    componentDidMount() {
        this.setState(() => ({
            movies: MovieService.getMovies(),
         
        }))
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <MovieList movies={this.state.movies}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Movies
