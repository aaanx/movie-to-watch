import React from 'react';
import "./MovieSearch.scss";

function MovieSearch({movieName, handleMovieChange, handleSearch}) {

    return (
        <div className="movie-search">
            <p className="movie-search__text">Search for a movie to add it to your watch list</p>
            <form className="movie-search__form">
                <input type="text" placeholder="Enter movie name" name={movieName} onChange={handleMovieChange} className="movie-search__form__input" />
                <input type="submit" value="Search" onClick={handleSearch} className="movie-search__form__button"/>
            </form>
        </div>
    )
}

export default MovieSearch;