import React from 'react'
import './Pagination.scss'

const Pagination = ({ gotoNextPage, gotoPrevPage}) => {
    return (
        <div>
            {gotoPrevPage && <button className="page-btn" onClick={gotoPrevPage}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button>}
            {gotoNextPage && <button className="page-btn" onClick={gotoNextPage}><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>}
        </div>
    )
}

export default Pagination