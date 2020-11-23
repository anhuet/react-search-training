import React, { useEffect,useState } from 'react';

import Categories from '../components/Categories'
import Type from '../components/Type'
import Brand from '../components/Brand'
import Rating from '../components/Rating'
import Price from '../components/Price'

import '../sass/menu.sass'

const axios = require('axios');

function Menu(props) {
    const {onFilterByTitle,
        valueTitle,
        onFilterByType,
        valueType,
        onFilterByBrand,
        valueBrand,
        onFilterByRating,
        valueRate,
        onFilterByPrice,
        valuePrice,
        onFilterByRange,
        from,
        end,
        onFilterAll} = props
    
    const [filterByCategory, setFilterByCategory] = useState([]);
    const [idTitle, setIdTitle] = useState('1');

    const handleChangeTilte = (title) => {
        onFilterByTitle(title)
    }
    const handleGetIdTitle = (id) => {
        setIdTitle(id)

    }
    const handleFilterByType = (type) => {
        onFilterByType(type)
    }
    const handleFilterByBrand = (brand) => {
        onFilterByBrand(brand)
    }
    const handleFilterByRating = (rate) => {
        onFilterByRating(rate)
    }
    const handleFilterByPrice = (price) => {
        onFilterByPrice(price)
    }
    const handleFilterByRange = (from,to) => {
        onFilterByRange(from,to)
    }
    const handleClearAll = () => {
        onFilterAll()
    }

    useEffect(() => {
        var url = "http://localhost:3001/types"
        axios.get(url)
        .then((res) => {
            const {data} = res 
            setFilterByCategory(data)
         } 
         )
        },[]);
    
    
    return (
        <div id="menu">
            <Categories category = {filterByCategory}
                        onChangeTitle = {handleChangeTilte}
                        getIdTitle = {handleGetIdTitle}
                        valueType ={valueType}
                        valueTitle ={valueTitle}
                        valueBrand={valueBrand}
                        valuePrice={valuePrice}
                        valueRate={valueRate}
                        from ={from}
                        end={end}
                        handleFilterAll = {handleClearAll}/>
            <Type valueTitle= {valueTitle}
                category = {filterByCategory} 
                idTitle = {idTitle}
                onFilterByType = { handleFilterByType}
                valueType= {valueType}
                />
            <Brand  onFilterByBrand = {handleFilterByBrand}
                    valueBrand ={valueBrand}
                    valueTitle= {valueTitle}
                    category = {filterByCategory} 
                    idTitle = {idTitle}

            />
            <Rating  onFilterByRating = {handleFilterByRating}
                    valueRate = {valueRate}/>
            <Price onFilterByPrice = {handleFilterByPrice}
                    valuePrice={valuePrice}
                    onFilterByRange = {handleFilterByRange}
                    from = {from}
                    end ={end}/>
            
                
            
        </div>
    );
}

export default Menu;