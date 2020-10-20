import React from 'react';
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    movies: []
  };

  componentDidMount(){
    axios.get("https://imdb-api.com/en/API/SearchMovie/k_xuaz1j2w/Inception 2010").then(
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <MovieSearch/>
        </div>
      );
    }
  }
}

export default App;