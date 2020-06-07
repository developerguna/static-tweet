import React from 'react';
import './nav.css';

const Nav = ({ activeTab, onTabChange , cartDet ,CartProducts}) =>
    (
        <nav className="App-nav">
            <ul>
                <li className={'App-nav-item'} id={activeTab === 0 && "selected"}>
                <NavLink index={0} onClick={onTabChange}>Item</NavLink>
                </li>
                <li className={"App-nav-item"} id={activeTab === 1 && "selected"} >
                <NavLink index={1} onClick={onTabChange}>Cart</NavLink>

                </li>
                {CartProducts ? <li className={"App-nav-item Total-Amount"}> <p>{CartProducts} items (${Math.round(cartDet)})</p> </li>
            :'' }</ul >
        </nav >
    );

    class NavLink extends React.Component
    {
        handleClick = () =>
        {
            this.props.onClick(this.props.index);
        }
        render()
        {
            return(
                <button onClick={this.handleClick}>
{this.props.children}
</button>
            );
        }
    }

export default Nav;