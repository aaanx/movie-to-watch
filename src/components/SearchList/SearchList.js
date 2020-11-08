import React from 'react';
import "./SearchList.scss";


function SearchList({movies, handleAddToWatchList}) {
    return (
        <div className="search-list">
            {movies.map((movie) => {
                return (
                <SearchListItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    image={movie.image}
                    handleAddToWatchList={handleAddToWatchList}
                />
                )
            })}

        </div>
    )
}


function SearchListItem({id, title, description, image, handleAddToWatchList}) {

    return (
        <div className="search-list__item" id={id}>
            
            
            <div className="search-list__item__container">
                <img src={image} alt="movie_img" className="search-list__item__container__image"/>
                <div className="search-list__item__container__overlay">
                    <p className="search-list__item__container__overlay__title">{title}</p>
                    <button onClick={() => handleAddToWatchList(id)} className="search-list__item__container__overlay__button">+</button>
                </div>
            </div>
            {/* <p className="search-list__item__description">{description}</p> */}
        
        </div>
    )
}

export default SearchList;