import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import ViewOrders from './ViewOrders';
import NewOrder from './NewOrder';

class CustomerNav extends React.Component{
    constructor(props){
        super(props);
        this.viewOrderClickHandler=this.viewOrderClickHandler.bind(this);
        this.newOrderClickHandler=this.newOrderClickHandler.bind(this);
    }

    viewOrderClickHandler(){
        ReactDOM.render(<ViewOrders/>,document.getElementById('customerContent'))
    }

    newOrderClickHandler(){
        ReactDOM.render(<NewOrder/>,document.getElementById('customerContent'))
    }

    render(){
        return(
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="0" onClick={this.viewOrderClickHandler}>View Orders</Menu.Item>
                    <Menu.Item key="1" onClick={this.newOrderClickHandler}>New Order</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default CustomerNav;