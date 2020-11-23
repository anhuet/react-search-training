import React, {useEffect} from 'react';


const axios = require('axios');

function Pageination(props) {
    const {page,onPageChange,search, countTotalRows,sort,title,type,brand,rate,price,from,end,numberOfPage} = props
    const {_page} = page
    
    const numberPage = Math.ceil(numberOfPage/8)

    const pageNumber = []
    for(let i = 1 ; i <= numberPage; i++)
     pageNumber.push(i)
    
    return (
        <div className="page">
            <button 
                disabled = {_page <=1}
                onClick = {() => onPageChange(_page-1)}>
                    Pre
            </button>

            {
                pageNumber.map(number => <button className="page_number" id ={_page === number ? "active" : "none" } onClick = {() => onPageChange(number)}> {number}</button>)
            }

            <button 
                disabled = {numberPage <= _page}
                onClick={() => onPageChange(_page+1)}>
                Next
            </button>
        </div>
       
    );
}

export default Pageination;