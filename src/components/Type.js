import React, { useState } from 'react';

Type.propTypes = {
    
};

function Type(props) {
    const {valueTitle,category,idTitle,onFilterByType,valueType} = props
    

    const handleChecked = (item) => {
        const filterByType = [...valueType]
        
        const index = filterByType.indexOf(item)

        if(index === -1)
            filterByType.push(item)
        else 
            filterByType.splice(index,1)
       
        
            onFilterByType(filterByType)
            

    }

   
    return (
        <div className = "type">
            <h3>Type</h3>
            {
                category.filter(item => item.id == idTitle)
                .map(item => (item.allType.map(item => (
                <li>
                    <form>
                        <input type ="checkbox" id = {item} checked = {valueType.includes(item) ? true : false} onChange = {() => handleChecked(item)}/>
                        <label htmlFor={item}> {item} </label>

                    </form>
                    

                </li>
                ))))
            }
            
        </div>
    );
}

export default Type;