import React from 'react'
import './Pagination.scss'

const Pagination = ({ gotoNextPage, gotoPrevPage}) => {
    return (
        <div>
            {gotoPrevPage && <button className="page-btn" onClick={gotoPrevPage}><i className="fa fa-angle-double-left" aria-hidden="true"></i></button>}
            {gotoNextPage && <button className="page-btn" onClick={gotoNextPage}><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>}
        </div>
    )
}

export default Pagination