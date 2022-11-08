import { useContext, useEffect, useState} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../Store/cart-context";


const Button = props => {
    const [btnHigh, setBtnHigh] =useState(false);
    const ctx = useContext(cartContext);
    const {items} =ctx;



const numberOfCartItems=items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
},0);


const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ''} `;
useEffect(() => {
    if(items.length === 0){
        return;
    }
setBtnHigh(true);

const timer = setTimeout(() => {
    setBtnHigh(false);
}, 300);

return() =>{
clearTimeout(timer)
};


}, [items]);


  return (

    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  
  );
};

export default Button;
// threee spans for icon text and badge
