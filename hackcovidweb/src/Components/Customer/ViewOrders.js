import React from 'react';

import 'antd/dist/antd.css';
import { List, Card } from 'antd';

class ViewOrders extends React.Component{
    constructor(props){
        super(props);
        this.state={
            custNumber:this.props.phone,
            data:[]
        }
    }

    async componentWillMount(){
        await fetch("http://127.0.0.1:5000/custorders?number="+this.state.custNumber,{
            method:"GET"
        }).then((response)=>{
            console.log(response)
            return response.json()
        }).then((parsedJson)=>{
            var messageJson=JSON.stringify(parsedJson)
            var stateObj=JSON.parse(messageJson)
            this.setState({
                ...this.state,
                data:stateObj
            })
        })

        console.log("Data is:")
        console.log(this.state.data)
    }

    render(){
        return(<div>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.state.data}
                renderItem={item => (

                <List.Item>
                    <Card title={item.orderdate}><div>
                        Shop: {item.shopname}<br/>
                        <b>Order Contents:</b>
                        <ul style={{type: 'circle' }}>
                        {
                            item.order.map(order=><div>Item: {order.item} <br/> Quantity: {order.quantity}</div>)
                        }
                        </ul>
                        </div>
                        </Card>
                </List.Item>
                )}
            />
        </div>)
    }
}

export default ViewOrders;