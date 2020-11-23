import React , {useState} from 'react';
import PropTypes from 'prop-types';

import '../sass/navbar.sass'




Navbar.propTypes = {
    onSubmit: PropTypes.func 
};


function Navbar(props) {
    const {onSubmit} = props
    const [value, setValue] = useState('');

    const handleValueChange = (e) => {
        let inputValue = e.target.value 
        setValue(inputValue)
        onSubmit(value)
    }
    
    return (
        <div className="navbar">
            <a className="navbar__logo">
                <img  src= "https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"/>
            </a>
            <a className="navbar__brand">
                amazing
            </a>
            <form className="navbar__form" >
                <input 
                    type="text"
                    placeholder="Search a product" 
                    value = {value}
                    onChange = {handleValueChange}
                />
                <button type="button">
                    Search
                    
                    
                </button>

            </form>
            

            
        </div>
    );
}

export default Navbar;