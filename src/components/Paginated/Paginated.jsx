import { useState } from 'react';
import styles from './Paginated.module.css'
import PropTypes from 'prop-types'

const Paginated = ({ currentPage, totalPages, onChangePage }) => {

    const [page, setPage] = useState(currentPage);

    const handleNextPage = () => {
        if (page < totalPages) {
            const updatePage = page + 1;
            setPage(updatePage);
            onChangePage(updatePage);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            const updatePage = page + 1;
            setPage(updatePage);
            onChangePage(updatePage);
        }
    };

    const handleSelectPage = (jumpPage) => {
        setPage(jumpPage);
        onChangePage(jumpPage)
    }
    return (
        <div className={styles.pagination}>
            <ul className={styles.paginationList}>
                <li
                    className={`${styles.pageButton} ${page === 1 || page === totalPages ? styles.disabled : ""
                        }`}
                    onClick={handlePrevPage}
                >
                    Back
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li
                        key={index}
                        className={`${styles.pageButton} ${page === index + 1 ? styles.activePage : ""
                            }`}
                        onClick={() => handleSelectPage(index + 1)}
                    >
                        {index + 1}
                    </li>
                ))}
                <li
                    className={`${styles.pageButton} ${page === totalPages ? styles.disabled : ""
                        }`}
                    onClick={handleNextPage}
                >
                    Next
                </li>
            </ul>
        </div>
    )
}


Paginated.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onChangePage: PropTypes.func
}

export default Paginated