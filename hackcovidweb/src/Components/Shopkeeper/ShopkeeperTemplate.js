import React from 'react';
import 'antd/dist/antd.css';
import ShopKeeperNav from './ShopkeeperNav';

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
                
            </div>
            </div>
        )
    }
}

export default ShopkeeperTemplate;