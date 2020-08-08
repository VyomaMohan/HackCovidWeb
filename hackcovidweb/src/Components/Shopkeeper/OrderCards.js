import React from 'react'

class OrderCards extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data:[]
        }
        //this.setList=this.setList.bind(this)
    }

    componentWillMount(){
        var tempList=[]
        tempList.push(this.props.orders)
        this.setState({
            data:tempList
        })

        console.log("Received one is")
        console.log(this.props.order)

    }

    render(){
       
        return(
            <div>
                <ul>
                    {
                        this.state.data.map((order)=><p>Timing: {order.orderdate}</p>)
                    }
                </ul>
            </div>
        )
    }

}

export default OrderCards;