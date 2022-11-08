import { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from './header.module.css';
import Button from './HeaderCartButton' ;

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Munchies</h1>
        <Button onClick={props.onShowCart}/>
      </header>
      <div className = {classes['main-image']} >
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
