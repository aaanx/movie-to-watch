import React from 'react';
import "./WatchList.scss";

function WatchList({watchList}) {
   
    return (
        <div className="watch-list">
            <p className="watch-list__title">Watch List</p>
            <div className="watch-list__container">
                <ol className="watch-list__container__list">
                    {watchList.map(movie => {
                        return (
                        <li className="watch-list__container__list__item" key={movie.id}>{movie.title} {movie.description}</li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default WatchList;