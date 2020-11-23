import React from 'react';

Brand.propTypes = {
    
};

function Brand(props) {
    const {category,idTitle,onFilterByBrand,valueBrand} = props
    
    

    const handleChecked = (item) => {
        const filterByBrand = [...valueBrand]
        
        const index = filterByBrand.indexOf(item)

        if(index === -1)
            filterByBrand.push(item)
        else 
            filterByBrand.splice(index,1)
       
        
            onFilterByBrand(filterByBrand)
            

    }

   
    return (
        <div className = "brand">
            <h3>Brand</h3>
            {
                category.filter(item => item.id == idTitle)
                .map(item => (item.brand.map(item => (
                <li>
                    <form>
                        <input type ="checkbox" id = {item} checked = {valueBrand.includes(item) ? true : false} onChange = {() => handleChecked(item)}/>
                        <label htmlFor={item}> {item} </label>

                    </form>
                    

                </li>
                ))))
            }
            
        </div>
    );
}

export default Brand;