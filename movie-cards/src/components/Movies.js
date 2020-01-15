import React from 'react';
import MovieList from './MovieList'
import MovieService from '../services/MovieService'
import '../App.css'

export default class Movies extends React.Component {
    state = {
        movies: [],
        styleToggle : false,
        open: true
    }

    changeStyleParentFunc = () => {
        this.setState( ()=> ({ styleTest : !this.state }))
     }
  

    componentDidMount() {
        this.setState(() => ({
            movies: MovieService.getMovies()
        }))
    }

    render() {
        return (
            <div >
                <div >
                    <div >
                        <MovieList movies={this.state.movies}
                            changeStyle={this.state.styleToggle}
                            openCChild  = {this.state.open}
                        />
                    </div>
                </div>
            </div>
        )
    }

}