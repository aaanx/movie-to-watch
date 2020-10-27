import React from 'react';
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import SearchList from "./components/SearchList/SearchList.js";
import WatchList from "./components/WatchList/WatchList.js";
import Navbar from "./components/Navbar/Navbar.js";
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
constructor(props){
  super(props);
  this.handleMovieChange = this.handleMovieChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
  this.handleAddToWatchList = this.handleAddToWatchList.bind(this);
  this.state = {
    error: null,
    isLoaded: false,
    movies: [],
    movieName: "",
    watchList: JSON.parse(localStorage.getItem('watchList')) || [],
    watchListStorage: []
  };
}

handleAddToWatchList(movieToAddID){
  let watchList = this.state.watchList;
  watchList.push(
    this.state.movies.results.find((movie) => {
    return movie.id == movieToAddID;
    })
  )
  this.setState({
    watchList: watchList
  }) 
  localStorage.setItem('watchList', JSON.stringify(this.state.watchList));
}

handleMovieChange(e) {
    this.setState({
      movieName: e.currentTarget.value
    });
}

handleSearch(e) {
    e.preventDefault();
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
  console.log(this.state.watchList);
  console.log(typeof this.state.watchList);
}

render(){
  const { error, isLoaded, movies } = this.state;
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/watch-list">
            <WatchList watchList={this.state.watchList} />
          </Route> 
          <Route path="/">
            <MovieSearch 
              movieName={this.state.movieName} 
              handleMovieChange={this.handleMovieChange} 
              handleSearch={this.handleSearch}  
            />
            {isLoaded ? 
            <SearchList 
              movies={this.state.movies.results}
              handleAddToWatchList={this.handleAddToWatchList}
            /> : "" }
          </Route>
        </Switch>
        
      </div>
      </Router>
    );
  }
}
// }

export default App;