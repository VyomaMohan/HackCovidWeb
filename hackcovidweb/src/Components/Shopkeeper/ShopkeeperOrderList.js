import React from 'react'
import 'antd/dist/antd.css';
import { List, Card } from 'antd';
import OrderCards from './OrderCards';

class ShopkeeperOrderList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            storeName:"store1",
            data:[]
        }

    }

    async componentWillMount(){
        await fetch("http://127.0.0.1:5000/orders?store="+this.state.storeName,{
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
        return(
            <div>
                <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.state.data}
                renderItem={item => (

                <List.Item>
                    <Card title={item.phone}><div>
                        Name: {item.name}<br/>
                        Location:{item.area}<br/>
                        Timing: {item.orderdate}<br/>
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
            </div>
        )
    }

}

export default ShopkeeperOrderList;