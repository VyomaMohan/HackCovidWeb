import React from 'react';
import 'antd/dist/antd.css';
import '../Homepage/Homepage.css'
import customer from '../Images/customer.jpg'
import shopkeeper from '../Images/shopkeeper.jpg'
import analysis from '../Images/analysis.png'

class Homepage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                 <div className="rowDisplay">
                     <div>
                        <img src={customer} alt="Customer Image"/>
                        <img src={shopkeeper} alt="Shopkeeper Image"/>
                        <img src={analysis} alt="Analysis Image"/>
                    </div>
                </div>
                <div className="rowDisplay">
                    <p><b>Customer</b></p>
                    <p><b>Shopkeeper</b></p>
                    <p><b>Analysis</b></p>
                </div>
                <div className="rowDisplay">
                    <p>Buy items</p>
                    <p>Register items and view orders</p>
                    <p>Analysis</p>
                </div>
            </div>
        )
    }
}

export default Homepage;
