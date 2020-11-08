import React from 'react';
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import SearchList from "./components/SearchList/SearchList.js";
import WatchList from "./components/WatchList/WatchList.js";
import Navbar from "./components/Navbar/Navbar.js";
import Pagination from "./components/Pagination/Pagination.js";
import axios from 'axios';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddToWatchList = this.handleAddToWatchList.bind(this);
    this.paginate = this.paginate.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      movieName: "",
      watchList: JSON.parse(localStorage.getItem('watchList')) || [],
      watchListStorage: [],
      loading: "",
      currentPage: 1,
      moviesPerPage : 4
    };
  }

  paginate(pageNumber) {
    this.setState({
      currentPage: pageNumber
    })
  }

  removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (var j in lookupObject) {
    newArray.push(lookupObject[j]);
  }
    return newArray;
  }

  handleAddToWatchList(movieToAddID){
    let watchList = this.state.watchList;
    watchList.push(
    this.state.movies.find((movie) => {
      return movie.id == movieToAddID;
    })
  )
    let uniqueWatchList = this.removeDuplicates(watchList, "id");
    this.setState({
      watchList: uniqueWatchList
    }) 
  }

  handleMovieChange(e) {
    this.setState({
      movieName: e.currentTarget.value
    });
  }

  handleSearch(e) {
    e.preventDefault();
    if(this.state.movieName.length > 0){
      this.setState({
        loading: "Loading results..."
      })
      axios.get(`https://imdb-api.com/en/API/SearchMovie/k_xuaz1j2w/${this.state.movieName}`).then(
        result => {
          this.setState({
            isLoaded: true,
            movies: result.data.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    } else {
      console.log("Enter movie name");
    }
  }

  componentDidUpdate() {
    //console.log(this.state.watchList);
    console.log(this.state.movies);
    localStorage.setItem('watchList', JSON.stringify(this.state.watchList));
  }

  render(){
    const { error, isLoaded, loading, currentPage, moviesPerPage, movies } = this.state;
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <Router>
        <div className="App">
          <Navbar numOfmovies={this.state.watchList.length}/>
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
              <React.Fragment>
                <SearchList 
                  movies={currentMovies}
                  handleAddToWatchList={this.handleAddToWatchList}
                />
                <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={this.paginate}/>
              </React.Fragment>
              : loading }
            </Route>
          </Switch>
        </div>
        </Router>
      );
    }
  }
}

export default App;