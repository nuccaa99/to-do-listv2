import React from "react";

const Pagination = ({ taskPerPage, totalTasks, paginate, currentPage }) => {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalTasks / taskPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pagination--container">
            <ul className="pagination">
                {pageNumbers.map((page) => {
                    return (
                        <li key={page} className="page--item">
                            <a href="!#" className={`${currentPage === page ? "page--link--active" : "page--link"}`} onClick={() => { paginate(page) }}>
                                {page}
                            </a>
                        </li>
                    )
                })}

            </ul>
        </nav>
    )
}

export default Pagination;