import React from 'react';

import '../sass/rating.sass'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";


Rating.propTypes = {
    
  
};

function Rating(props) {
    const {onFilterByRating,valueRate} = props
    const rate = [5,4,3,2,1]
   

    function displayStar(numberStar) {
        let stars = []
        for (let i = 0; i < numberStar; i++) {
			stars.push(
				<span key= {i}className="star" key={i}>
					<FontAwesomeIcon icon={fasStar} />
				</span>
			);
		}
		for (let i = 0; i < 5 - numberStar; i++) {
			stars.push(
				<span key={i}className="star" key={5 - i}>
					<FontAwesomeIcon icon={farStar} />
				</span>
			);
		}
		return stars;
    }

    const handleRating = (number) => {
        onFilterByRating(number)
    }
   
   
    return (
        <div className= "rate">
            <h3>Rating</h3>
                <ul>
                    {rate.map(number => 
                    ( 
                    <li key = {number } onClick = {() => handleRating(number)} className = {number ===valueRate ? "active" : ''} >{displayStar(number)} </li>
                    )
                    )}

                </ul>
                
            </div>
       

            
    );
}

export default Rating;