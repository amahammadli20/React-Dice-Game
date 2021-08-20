import React from 'react';
import Proptypes from 'prop-types';
import './style.css';

class Dice extends React.Component{
    static defaultProps ={
        num: "one",
        rolling: false
    }

    render(){
        return (
            <div className={`Dice fas fa-dice-${this.props.num} ${this.props.rolling && "shaking"}`}></div>
        )
    }
}

Dice.propTypes = {
    num: Proptypes.oneOf(["one", "two", "three", "four", "five", "six"])
}
export default Dice;