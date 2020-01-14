import React from 'react';
import MovieList from './MovieList'
import MovieService from  '../services/MovieService'

export default class Movies extends React.Component {
    state = {
        movies : []
    }

    componentDidMount() {
        this.setState(()=> ({
            movies : MovieService.getMovies()
        }))
    }
}