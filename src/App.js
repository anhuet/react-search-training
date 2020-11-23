import React , {useState} from 'react';
import './App.sass';
import Navbar from './components/Navbar'
import Menu from './containers/Menu'
import Products from './containers/Products'

function App() {
  const [search , setSearch] = useState('');
  const [filterByTitle, setFilterByTitle] = useState('');
  const [filterByType, setFilterByType] = useState([]);
  const [filterByBrand,setFilterByBrand] = useState([]);
  const [filterByRating, setFilterByRating] = useState('');
  const [filterByPrice, setFilterByPrice] = useState('');
  const [from, setFrom] = useState('');
  const [end, setEnd] = useState('');

 


  const handleSubmit = (search) => {
    setSearch(search)
  }

  const handleFilterByTitle = (title) => {
    setFilterByTitle(title)
    
  }

  const handleFilterByType = (type) =>  {
    setFilterByType(type)
  }
  const handleFilterByBrand = (brand) => {
    setFilterByBrand(brand)
  }
  const handleFilterByRating = (rate) => {
    setFilterByRating(rate)
  }

  const handleFilterByPrice = (price) => {
    setFilterByPrice(price)
  }
  const handleFilterByRange = (from,end) => {
    setFrom(from)
    setEnd(end)
  }
  const handleFilterAll = () => {
    setFilterByTitle('')
    setFilterByType([])
    setFilterByBrand([])
    setFilterByRating('')
    setFilterByPrice('')
    setFrom('')
    setEnd('')

  }
  
  
  
  return (
    <div className="App">
      
      <Navbar onSubmit= { handleSubmit}/>
      <main class="category">
        <div className="menu">
            <Menu onFilterByTitle = {handleFilterByTitle}
              valueTitle = {filterByTitle}
              onFilterByType = {handleFilterByType}
              valueType = {filterByType}
              onFilterByBrand = {handleFilterByBrand}
              valueBrand = {filterByBrand} 
              onFilterByRating = {handleFilterByRating}
              valueRate={filterByRating}
              onFilterByPrice={handleFilterByPrice}
              valuePrice={filterByPrice}
              onFilterByRange={handleFilterByRange}
              from ={from}
              end = {end}
              onFilterAll = {handleFilterAll}/>

        </div>
        <div className="product-container">
          <Products search = {search}
                  from={from}
                  end={end}
                  title = {filterByTitle}
                  type = {filterByType}
                  brand = {filterByBrand}
                  rate = {filterByRating}
                  price ={filterByPrice}
                  />

        </div>
        
        

      </main>
      
    </div>
  );
}

export default App;
