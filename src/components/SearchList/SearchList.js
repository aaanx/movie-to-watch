import React from 'react';
import "./SearchList.scss";

function SearchList(props) {
    return (
        <div className="search-list">
            {props.movies.map((movie) => {
                return (
                <SearchListItem
                    key={movie.id}
                    title={movie.title}
                    description={movie.description}
                    image={movie.image}
                />
                )
            })}

        </div>
    )
}


function SearchListItem(props) {

    return (
        <div className="search-list__item">
            <img src={props.image} alt="movie_img" className="search-list__item__image"/>
            <p className="search-list__item__title">{props.title} {props.description}</p>
            <input type="submit" value="Add to watch list" className="search-list__item__button"/>
        </div>
    )
}

export default SearchList;