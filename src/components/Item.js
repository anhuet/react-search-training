import React from 'react';
import '../sass/product.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";


function Item(props) {
    const {items} = props
   

    function displayStar(numberStar) {
        let stars = []
        for (let i = 0; i < numberStar; i++) {
			stars.push(
				<span key= {i} className="star" >
					<FontAwesomeIcon icon={fasStar} />
				</span>
			);
		}
		for (let i = 0; i < 5 - numberStar; i++) {
			stars.push(
				<span className="star" key={5 - i}>
					<FontAwesomeIcon icon={farStar} />
				</span>
			);
		}
		return stars;
    }
    
   
    return (
        <div className= "product">
            
                {items.map(item => 
                ( <div key = {item.id}className= "product__item">
                    <div className="container">
                        <div className="product__img"> 
                            <img src= {item.image}></img>
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.type}</p>
                        <div className="product__bottom">
                            <div className="product__bottom--rate">{displayStar(item.rating)}</div>
                            <h5>${item.price}</h5>

                        </div>

                    </div>
                    
                </div>)
                 )}
            </div>
       

            
    );
}

export default Item;