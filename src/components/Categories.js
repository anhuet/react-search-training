import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEraser } from '@fortawesome/free-solid-svg-icons';

import '../sass/menu.sass'


Categories.propTypes = {
    category : PropTypes.array,
    onChangeTitle : PropTypes.func

    
};

function Categories(props) {
    const {category,onChangeTitle,getIdTitle,valueBrand,valuePrice,valueRate,valueTitle,valueType,from,end,handleFilterAll} = props

    
    const [expandId, setExpandId] = useState('');
    const [expandSubItem, setExpandSubItem] = useState('');
    

    
    const handleExpandId = (id,title) => {
        if(id === expandId) {
            setExpandId('')
        }
        else {
            setExpandId(id)
            getIdTitle(id)
            onChangeTitle(title) 
         }      
    }
    const handleExpandSubitem = (id,title) => {
        if(id === expandSubItem) {
            setExpandSubItem('')
        }
        else {
            setExpandSubItem(id)
            onChangeTitle(title)

        }
        
    }
    return (
        <div className ="menu__result">
            <div className = "clear " style= {{display: valueTitle||valueBrand.length > 0||valuePrice||valueRate||valueType.length > 0|| from||end ? "block" : "none"}}>
                <a href="#" onClick = {handleFilterAll}>
                    <FontAwesomeIcon icon ={faEraser}/>
                    Clear all filter
                </a>
            </div>
            <h3> Show result </h3>
            
            <ul >
                {category.map(item => 
                ( <li key = {item.id}>
                    <span onClick = {() => {handleExpandId(item.id,item.title)}} id ={valueTitle === item.title ? "active" : ""}>
                        <FontAwesomeIcon icon = {faAngleRight}/> {item.title}
                    </span>
                    <ul style = {{display : expandId === item.id ? "block" : "none" }}>
                        {item.categories.map(subitem => 
                        (<li key = {subitem.id}>
                            <span className = "sub__title" id ={valueTitle === subitem.type ? "active" : ""} onClick = {() => {handleExpandSubitem(subitem.id,subitem.type)}} >
                                <FontAwesomeIcon icon = {faAngleRight}/> {subitem.type}
                            </span>
                            <ul style = {{display : expandSubItem === subitem.id ? "block" : "none" }}>
                                
                                {subitem.category.map(subitem => 
                                    (subitem.length !=0 ? <li key = {subitem.id}>
                                        <span className = "sub__title2" onClick = {() => onChangeTitle(subitem.type)} id ={valueTitle === subitem.type ? "active" : ""} >
                                            <FontAwesomeIcon icon = {faAngleRight}/> {subitem.type}
                                        </span>
                                
                                    </li> : ""
    )                               )}
                            </ul>
                            
                        </li>
)                       )}
                    </ul>
                    

                    
                    
                </li>)
                 )}
            </ul>

            
            
        </div>
    );
}

export default Categories;