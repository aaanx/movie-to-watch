import React from 'react';
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import SearchList from "./components/SearchList/SearchList.js";
import axios from 'axios';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      movieName: ""
    };
  }

  handleMovieChange(e) {
      this.setState({
        movieName: e.currentTarget.value
      });
  }

  handleSearch(e) {
      e.preventDefault();
      console.log(this.state.movieName);

      axios.get(`https://imdb-api.com/en/API/SearchMovie/k_xuaz1j2w/${this.state.movieName}`).then(
        result => {
          this.setState({
            isLoaded: true,
            movies: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidUpdate() {
    console.log(this.state.movies.results);
  }

  render(){
    const { error, isLoaded, movies } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else {
      return (
        <div className="App">
          <MovieSearch 
            movieName={this.state.movieName} 
            handleMovieChange={this.handleMovieChange} 
            handleSearch={this.handleSearch}  
          />
          {isLoaded ? <SearchList movies={this.state.movies.results}/> : "" }
        </div>
      );
    }
  }
// }

export default App;