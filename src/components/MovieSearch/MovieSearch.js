import React from 'react';


function MovieSearch() {

    return (
        <div>
            <p>Search for a movie and add it to your watch list</p>
            <form>
                <input type="text" name="movie" className="search-input" />
                <input type="submit" value="Add to watch list"/>
            </form>
        </div>
    )
}

export default MovieSearch;