import React from 'react';
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from 'axios'
require('dotenv').config()


/* console.log(process.env.REACT_APP_API_KEY); */

class App extends React.Component {

    state = {
        movies : [],

        searchQuery: ""
    }

    

    async componentDidMount() {  // axios kutuphanesi ile veri çekme. tek basamakta hallettık
        const response = await axios.get(`https://api.themoviedb.org/3/list/7092826?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        console.log(response)
        this.setState({movies: response.data.items})
    }

   

    // axios apı yontemiyle delete islemi
    deleteMovie = async (movie) => {
        axios.post(`https://api.themoviedb.org/3/list/7092826/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`)
        const newMovieList = this.state.movies.filter(  
            m => m.id !== movie.id
        );

        this.setState(state =>({ 
            movies : newMovieList
        }))
    }

    searchMovie = (event) => {
        this.setState({searchQuery: event.target.value}) // state update edildi
    }

    render() {

        // indexOf aradığımız metodu döndürür aradığımız yoksa bişey dönmez
        let filteredmovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie}>

                        </SearchBar>
                    </div>
                </div>
                <MovieList 
                    movies={filteredmovies}
                    deleteMovieProp={this.deleteMovie}>
                </MovieList> {/* this.deleteMovie yazmamızın sebebi deleteMovie fonksiyonunu props haline getirdik ve movie listte onClick te kullandık */}
            </div>
        )
    }
}



export default App

