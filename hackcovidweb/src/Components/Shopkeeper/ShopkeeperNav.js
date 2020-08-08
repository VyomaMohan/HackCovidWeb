import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

class ShopKeeperNav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="0">View Orders</Menu.Item>
                    <Menu.Item key="1">Edit Stock</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default ShopKeeperNav;