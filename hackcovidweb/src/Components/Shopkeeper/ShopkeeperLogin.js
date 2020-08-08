import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import ShopkeeperTemplate from './ShopkeeperTemplate';

class ShopKeeperLogin extends React.Component{
    constructor(props){
        super(props);
        this.shopkeeperSubmitForm=this.shopkeeperSubmitForm.bind(this);
    }

    shopkeeperSubmitForm(){
        ReactDOM.render(<ShopkeeperTemplate/>,document.getElementById('contentdiv'));
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
        <Input />
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
        <Input.Password />
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