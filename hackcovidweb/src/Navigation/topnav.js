import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import shoppingcart from '../Images/shoppingcart.png'
import ShopKeeperLogin from '../Components/Shopkeeper/ShopkeeperLogin';
import CustomerLogin from '../Components/Customer/CustomerLogin';

class TopNav extends React.Component{
    constructor(props){
        super(props);

        this.customerRender=this.customerRender.bind(this);
        this.shopKeeperRender=this.shopKeeperRender.bind(this);
    }

    shopKeeperRender(){
        ReactDOM.render(<ShopKeeperLogin/>,document.getElementById('contentdiv'));
    }

    customerRender(){
        ReactDOM.render(<CustomerLogin/>,document.getElementById('contentdiv'));
    }

    render(){
        return(
            <div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="0"><img src={shoppingcart} width="50" height="50" alt="Shopping cart"/></Menu.Item>
                    <Menu.Item key="1" onClick={this.customerRender}>Customer</Menu.Item>
                    <Menu.Item key="2" onClick={this.shopKeeperRender}>Shopkeeper</Menu.Item>
                    <Menu.Item key="3">Analysis</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default TopNav;