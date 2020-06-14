import React from 'react';
import PropTypes from 'prop-types';
import Item from '../itempage/Item.js';
import './CartPage.css';


const CartPage = ({onTabChange, items, onAddOne, onRemoveOne , ItemCost}) => {
    let itemCount =0;
    items.map((item,i) =>
        {   
            itemCount +=item.count;

        })

    return (
        <div>
            {items.length ?
                (<ul className="CartPage-items">
                    {items.map(item =>

                        <li key={item.id} className="CartPage-item">
                            <Item item={item} >
                                <div className="CartItem-controls">
                                    <button
                                        className="CartItem-removeOne"
                                        onClick={() => onRemoveOne(item)}>&ndash;</button>
                                    <span className="CartItem-count">{item.count}</span>
                                    <button
                                        className="CartItem-addOne"
                                        onClick={() => onAddOne(item)} >+</button>
                                </div>
                            </Item>
                        </li>

                    )}
                   <p><span className="CartPage-item">Cart Items: {items.length}</span><span>Products : {itemCount}</span><span>Cost : ${ItemCost}</span></p> 

                </ul>) :
                (<div className="Empty-div">
                    <h4 className="Empty">Your cart is empty</h4>
                    <p>Cart Your Item By Clicking 
                        <u  onClick={onTabChange}>  Add to Cart </u>
                        <strong>Here</strong></p></div>)
            }
        </div>
    );
}



CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};
CartPage.propTypes = {
    items: PropTypes.array.isRequired
};
export default CartPage;