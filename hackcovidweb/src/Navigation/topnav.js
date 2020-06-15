import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import shoppingcart from '../Images/shoppingcart.png'

class TopNav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="0"><img src={shoppingcart} width="50" height="50" alt="Shopping cart"/></Menu.Item>
                    <Menu.Item key="1">Customer</Menu.Item>
                    <Menu.Item key="2">Shopkeeper</Menu.Item>
                    <Menu.Item key="3">Analysis</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default TopNav;