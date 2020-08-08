import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';

class NewOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            phone:this.props.phone,
            area:"",
            city:"",
            store:"",
            orderdate:"",
            itemList:[],
            quantityList:[],
        }
        this.listItemUpdate=this.listItemUpdate.bind(this);
        this.listQuantityUpdate=this.listQuantityUpdate.bind(this);
        this.listAddItems=this.listAddItems.bind(this);
        this.listRemoveItems=this.listRemoveItems.bind(this);
        this.changeStoreName=this.changeStoreName.bind(this);
        this.submitList=this.submitList.bind(this);
        this.changeDate=this.changeDate.bind(this);
    }


    
    async componentWillMount(){
      await fetch("http://127.0.0.1:5000/findcustomer?phone="+this.props.phone,{
            method:"GET"
        }).then((response)=>{
            console.log(response)
            return response.json()
        }).then((parsedJson)=>{
            var messageJson=JSON.stringify(parsedJson)
            var stateObj=JSON.parse(messageJson)
            console.log(stateObj)
            this.setState({
              name:stateObj[0]["name"]
            })
            this.setState({
              city:stateObj[0]["city"]
            })
            this.setState({
              area:stateObj[0]["area"]
            })
        })
    }

    listAddItems(){
      var tempItems=[]
      tempItems=this.state.itemList
      tempItems.add("empty")
      this.setState({
          itemList:tempItems
      })
      var tempQty=[]
      tempQty=this.state.quantityList
      tempQty.add("empty")
      this.setState({
          quantityList:tempQty
      })
    }

    listItemUpdate(event,index){
      var tempItems=this.state.itemList
        tempItems[index]=event.target.value
        this.setState({
            itemList:tempItems
        })
    }

    listQuantityUpdate(event,index){
        var tempQty=this.state.quantityList
        tempQty[index]=event.target.value
        this.setState({
            quantityList:tempQty
        })
    }

    listRemoveItems(index){
        var tempItems=this.state.itemList
        tempItems.splice(index,1)
        this.setState({
            itemList:tempItems
        })
        var tempQty=this.state.quantityList
        tempQty.splice(index,1)
        this.setState({
            quantityList:tempQty
        })
    }

    async submitList(){

        console.log("Submitting")
        console.log(this.state.area)
        var combinedList=[]
        var count=this.state.itemList.length
        for(var i=0;i<count;i++){
            combinedList.push({"item":this.state.itemList[i],"quantity":this.state.quantityList[i]})
        }
        console.log(combinedList)
        
        var postBody=JSON.stringify(
            {
                "area":this.state.area,
                "city":this.state.city,
                "name":this.state.name,
                "order":combinedList,
                "orderdate":this.state.orderdate,
                "phone":this.state.phone,
                "shopname":this.state.store
            }
        )

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: postBody,
            redirect: 'follow'
          };
          
          await fetch("http://127.0.0.1:5000/neworder", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    changeStoreName(event){
      this.setState({
        store:event.target.value
      })
    }

    changeDate(date,dateString){
        this.setState({
          orderdate:dateString
        })
    }

    render(){
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 4 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 20 },
            },
          };
          const formItemLayoutWithOutLabel = {
            wrapperCol: {
              xs: { span: 24, offset: 0 },
              sm: { span: 20, offset: 4 },
            },
          };
        
        return(
            <div>
                 <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel}>

                    <Form.Item>
                      <Input placeholder="store name" style={{ width: '60%' }} onChange={this.changeStoreName}></Input>
                    </Form.Item>

                    <Form.Item>
                    <Space direction="vertical">
                      <DatePicker onChange={this.changeDate} />
                    </Space>
                    </Form.Item>

                    <Form.List name="names">
                        {(fields, { add, remove }) => {
                        return (
                    <div>
                        {fields.map((field, index) => (
                        <Form.Item
                            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                            label={index === 0 ? 'Order Content' : ''}
                            required={false}
                            key={field.key}
                            >
                            <Form.Item
                            {...field}
                            validateTrigger={['onChange', 'onBlur']}
                            noStyle
                            >
                            <Input placeholder="item name" style={{ width: '60%' }} onBlur={(event)=>this.listItemUpdate(event,index)} />
                            <Input placeholder="quantity" style={{ width: '60%' }} onBlur={(event)=>this.listQuantityUpdate(event,index)} />
                        </Form.Item>
                        {fields.length >= 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                        this.listRemoveItems(index);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                    //this.listAddItems();
                  }}
                  style={{ width: '60%' }}
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={this.submitList}>
          Place Order
        </Button>
      </Form.Item>
    </Form>
            </div>
        )
    }
}

export default NewOrder;