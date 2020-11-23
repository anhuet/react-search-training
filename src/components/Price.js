import React , {useEffect,useState} from 'react';

const axios = require('axios');

function Price(props) {
    const {onFilterByPrice, onFilterByRange} = props

    

    const [priceRange, setPriceRange] = useState([]);
    const [from, setFrom] = useState('');
    const [end, setEnd] = useState('');

    const handlePrice = (price) => {
        onFilterByPrice(price)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onFilterByRange(from,end)
        
        

    }
    useEffect(() => {
        const url = "http://localhost:3001/prices"
        axios.get(url)
        .then((res) => {
            const {data} = res
            setPriceRange(data)

        })
       
    },[]);

    const render = (from,end) => {
    if(from!=''&&end!='') return <li> $ {from} - {end}</li>
    if(from!='' &&end=='') return <li> ≥ {from}</li>
    if(from==''&&end!='') return <li>≤ {end}</li>
    return (priceRange.map(item => {
        if(item.id ===1) 
            return <li key={item.id} 
                        onClick = {() => handlePrice(item.price_range)} >
                        ≤ {item.price_range} 
                    </li>
        if(item.id ===priceRange.length) 
            return <li key={item.id} onClick = {() => handlePrice(item.price_range)} > ≥ {item.price_range} </li>
        else 
            return <li key={item.id} onClick = {() => handlePrice(item.price_range)} > {item.price_range} </li>
    }))
    }
  
    
    return (
        
        <div className= "price">
            <h3>Price</h3>
            <ul>
            {
                render(from,end)
            }

            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                <span>$</span>
                <input
                    type="number"
                    value={from}
                    onChange={(value) => setFrom(value.target.value)}
                />
                </label>
                <span></span>
                <label>
                <span>$</span>
                <input
                    type="number"
                    value={end}
                    onChange={(value) => setEnd(value.target.value)}
                />
                </label>
                <button type="submit">Go</button>
            </form>
            
        </div>
       
    );
}

export default Price;