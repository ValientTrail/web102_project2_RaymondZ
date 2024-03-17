import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {
        setIsFlipped(false); 
    }, [props.question]);
    

    return(
        <div className={`Card ${props.question} ${props.answer} ${props.backImg} ${isFlipped ? 'is-flipped' : ''}` } 
        onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h3>{props.question}</h3>
                </div>
                <div className="flip-card-back">
                    <img src={props.backImg} style={{ width:200, height:100 }}></img>
                    <h3>{props.answer}</h3>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
    backImg: PropTypes.string,
    onNewCard: PropTypes.bool,
    userHasAnswered: PropTypes.bool
}

export default Card;