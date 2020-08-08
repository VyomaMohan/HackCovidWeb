import React from 'react';
import 'antd/dist/antd.css';


import CustomerNav from './CustomerNav';
import ViewOrders from './ViewOrders';

class CustomerTemplate extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <div id="customerNav">
                <CustomerNav phone={this.props.phone}/>
            </div>
            <div id="customerContent">
                <ViewOrders phone={this.props.phone}/>
            </div>
            </div>
        )
    }
}

export default CustomerTemplate;