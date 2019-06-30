import React from "react"
import Pagination from 'react-bootstrap/Pagination'
import './Pages.css'

const Pages = ({ info, loadPage, currentPage }) => {

    // create pagination items depending on how many pages exist
    let items = [];
    for (let number = 1; number <= info.pages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => loadPage(number)}>
                    {number}
                </Pagination.Item>,
            );
    }

    const paginationBasic = (
        <div id="footer">
            <Pagination.First onClick={() => loadPage(1)}>First</Pagination.First>
            {/* show only 5 items(+2 and -2 from page we are on) */}
            <Pagination>{items.filter((item) => parseInt(item.key) <= currentPage + 2 && currentPage - 2 <= parseInt(item.key))}</Pagination>
            <Pagination.Last onClick={() => loadPage(info.pages)}>Last</Pagination.Last>
        </div>
    );

    return (
        <div>{paginationBasic}</div>
    )
}

export default Pages