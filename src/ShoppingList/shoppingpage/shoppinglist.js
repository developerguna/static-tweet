import React from 'react';
import Nav from '../nav/nav';
import './shoppinglist.css'
import ItemPage from '../itempage/ItemPage.js';
import { items } from '../../JSONData/static-data';
import CartPage from '../cartpage/CartPage.js';
import { render } from '@testing-library/react';

class ShoppingList extends React.Component {
   state = {
      activeTab: 0,
      cart: [],
      Cost:0,
      Products:0
   };
   
   handleTabchange = (index) => {
      this.setState({ activeTab: index });
   };

   handleAddToCart = (item) => {
     
      this.setState({
         cart: [...this.state.cart, item.id],
         Cost:this.state.Cost+item.price,
         Products:this.state.Products+1
      });
//console.log(this.state.cart.map(item => item));
   }

   renderContent() {
      switch (this.state.activeTab) {
         default:
         case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
         case 1: return this.renderCart();

      }
   }
   renderCart() {
      
      // Count how many of each item is in the cart
      let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
         itemCounts[itemId] = itemCounts[itemId] || 0;
         itemCounts[itemId]++;
         return itemCounts;
      }, {});
      
      let cartItems = Object.keys(itemCounts).map(itemId => {
         // Find the item by its id
         var item = items.find(item =>
            item.id === parseInt(itemId, 10)
         );

         
         // Create a new "item" that also has a 'count' property
         return {
            ...item,
            count: itemCounts[itemId]
         }
      });
     
     
         
      return (
         <CartPage
            items={cartItems}
            onAddOne={this.handleAddToCart}
            onRemoveOne={this.handleRemoveOne} ItemCost={this.state.Cost} onTabChange={this.handleTabchange} />
      );
   
}

   handleRemoveOne = (item) => {
      let index = this.state.cart.indexOf(item.id);
      this.setState({
         cart: [
            ...this.state.cart.slice(0, index),
            ...this.state.cart.slice(index + 1)
         ],
         Cost:this.state.Cost-item.price ,
         Products:this.state.Products-1
      });
   }
   render() {
      let { activeTab } = this.state;
      return (
         <div className="shopping-list shopping-App">
            <h1>Shopping List for {this.props.name}</h1>
            <Nav activeTab={activeTab} onTabChange={this.handleTabchange} cartDet={this.state.Cost} CartProducts={this.state.Products}/>
            <main className="App-content">
               {this.renderContent()}
            </main>
         </div>
      );
   }
}

export default ShoppingList;