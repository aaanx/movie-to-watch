import React from 'react';
import "./SearchList.scss";

function SearchList(props) {
    return (
        <div className="search-list">
            {props.movies.map((movie) => {
                return (
                <SearchListItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    image={movie.image}
                    handleAddToWatchList={props.handleAddToWatchList}
                />
                )
            })}

        </div>
    )
}


function SearchListItem(props) {

    return (
        <div className="search-list__item" id={props.id}>
            <img src={props.image} alt="movie_img" className="search-list__item__image"/>
            <p className="search-list__item__title">{props.title} {props.description}</p>
            <input type="submit" value="Add to watch list" onClick={() => props.handleAddToWatchList(props.id)} className="search-list__item__button"/>
        </div>
    )
}

export default SearchList;

//onClick={()=>this.props.myFunction(param)}