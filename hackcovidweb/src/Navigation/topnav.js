import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import shoppingcart from '../Images/shoppingcart.png'
import ShopKeeperLogin from '../Components/Shopkeeper/ShopkeeperLogin';

class TopNav extends React.Component{
    constructor(props){
        super(props);

        this.customerRender=this.customerRender.bind(this);
    }

    customerRender(){
        ReactDOM.render(<ShopKeeperLogin/>,document.getElementById('contentdiv'));
    }

    render(){
        return(
            <div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="0"><img src={shoppingcart} width="50" height="50" alt="Shopping cart"/></Menu.Item>
                    <Menu.Item key="1">Customer</Menu.Item>
                    <Menu.Item key="2" onClick={this.customerRender}>Shopkeeper</Menu.Item>
                    <Menu.Item key="3">Analysis</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default TopNav;