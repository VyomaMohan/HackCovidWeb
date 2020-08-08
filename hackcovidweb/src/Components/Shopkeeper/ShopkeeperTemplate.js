import React from 'react';
import 'antd/dist/antd.css';
import ShopKeeperNav from './ShopkeeperNav';
import ShopkeeperOrderList from './ShopkeeperOrderList';

class ShopkeeperTemplate extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <div id="shopkeeperNav">
                <ShopKeeperNav/>
            </div>
            <div id="shopkeeperContent">
                <ShopkeeperOrderList/>
            </div>
            </div>
        )
    }
}

export default ShopkeeperTemplate;