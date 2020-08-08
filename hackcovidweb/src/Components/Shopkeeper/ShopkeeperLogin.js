import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import ShopkeeperTemplate from './ShopkeeperTemplate';

class ShopKeeperLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
          phone:"",
          password:""
        }
        this.shopkeeperSubmitForm=this.shopkeeperSubmitForm.bind(this);
        this.usernameChange=this.usernameChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
    }

    async shopkeeperSubmitForm(){
      var responseString=""

      var tempJson=JSON.stringify({"phone":this.state.phone,"password":this.state.password});

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: tempJson,
        redirect: 'follow'
      };
      
      await fetch("http://127.0.0.1:5000/verifyshopkeeper", requestOptions)
        .then(response => response.text())
        .then(result => {
          responseString=result
          console.log(result)
        })
        .catch(error => console.log('error', error));

      console.log("Response string is")
      console.log(responseString)
      
      if(responseString=="correct"){
        ReactDOM.render(<ShopkeeperTemplate phone={this.state.phone}/>,document.getElementById('contentdiv'));
      }
      else{
        window.alert("Incorrect username or password")
      }
    }

    usernameChange(event){
      this.setState({
        phone:event.target.value
      })
  }

  passwordChange(event){
    this.setState({
      password:event.target.value
    })
  }

    render(){

        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 10,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 6,
              span: 10,
            },
          };

        return(
            <div>
                <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(event)=>this.usernameChange(event)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(event)=>this.passwordChange(event)}/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={this.shopkeeperSubmitForm}>
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
        )
    }
}

export default ShopKeeperLogin;