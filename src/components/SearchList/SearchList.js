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
            
            
            <div className="search-list__item__container">
                <img src={props.image} alt="movie_img" className="search-list__item__container__image"/>
                <div className="search-list__item__container__overlay">
                    <p className="search-list__item__container__overlay__title">{props.title}</p>
                    <button onClick={() => props.handleAddToWatchList(props.id)} className="search-list__item__container__overlay__button">+</button>
                </div>
            </div>
            {/* <p className="search-list__item__description">{props.description}</p> */}
        
        </div>
    )
}

export default SearchList;