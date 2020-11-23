import React , { useState, useEffect } from 'react';
import Item from '../components/Item'
import Pageination from '../components/Pageination'
const axios = require('axios');



function Products(props) {
    const {search,title,type,brand,rate,price,from,end} = props

    const [loading, setLoading] = useState(true)
    const [numberPage,setNumberPage] = useState('')
    
    
    const [ProductItem, setProductItem] = useState([]);
    const [pagi, setPagi] = useState({
        _page : 1,
        _limit : 8,
        _totalRows : '',
    });
    
   
    const [sort, setSort] = useState("");

    useEffect(() => {
       

        var url = `http://localhost:3001/products?`
        if (search) {
          url += `&name_like=${search}`;
        }
        if(sort) {
          url += `&_sort=price&_order=${sort}`
        }
        if (from) {
          url += `&price_gte=${from}`;
        }
    
        if (end) {
          url += `&price_lte=${end}`;
        }
        
        
      
        axios.get(url)
        .then(function(res) {
          
            let {data} = res
            setLoading(false)
             if(title != '' ) data = data.filter(item => item.categories.includes(title))
             if(type !="") data = data.filter(item => type.includes(item.type))
             if(brand !="") data = data.filter(item => brand.includes(item.brand))
             if(rate) data = data.filter(item =>item.rating === rate )
             if(price) data = data.filter(item => item.price_range === price)
             const totalRows = data.length
             setNumberPage(totalRows)
            
              const sliceData = data.slice((pagi._page-1)*8,pagi._page*8)
              setProductItem(sliceData)
              
              
           
        })
        
    }, [rate,search,sort,title,pagi,type,brand,price,from,end,loading,numberPage]);
    
    
   

    function handlePageChange(page) {
      setPagi({
        ...pagi,
        _page: page
      })
      
    }
    return (
    <div>
      {
        ProductItem.length > 0 ? 
        ( <div>
            <div className= "product__header">
             <p className="product__count">{numberPage} results found</p>
            <div className="product__filter">
              <select 
                value = {sort}
                onChange = {(e) => setSort(e.target.value)}>  
                <option value="">Featured</option>
                <option value="asc">Price asc.</option>
                <option value="desc">Price desc.</option>
             </select>

            </div>

            </div>
            {loading ? <div>Loading </div> : 
              <Item items = {ProductItem}
                  title ={title} />}
            <Pageination 
            from={from}
            end={end}
            price = {price}
            rate = {rate}
            brand= {brand}
            type = {type}
              title ={title} 
              page = {pagi}
              onPageChange= {handlePageChange}
              search = {search}
              numberOfPage = {numberPage}
              
              
              
              />
          </div>
    ) : <p className = "no-result">No result</p>
      }

    </div>
    );
}

export default Products;