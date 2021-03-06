//JSX structure 

import React from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardButton>Cart</HeaderCardButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food" />
            </div>
        </React.Fragment>
    )
};

export default Header;