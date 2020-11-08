import React from "react";
import "./Pagination.scss";

function Pagination ({moviesPerPage, totalMovies, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
        {pageNumbers.map(number => (
            <li key={number} className="pagination__item">
                <a onClick={() => paginate(number)} href="!#" className="pagination__item__link">
                    {number}
                </a>
            </li>
        ))}
        </nav>
    )
}

export default Pagination;