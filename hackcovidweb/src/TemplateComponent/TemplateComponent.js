import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import TopNav from '../Navigation/topnav.js'
import Homepage from '../Homepage/Homepage.js'

const {Header,Content}=Layout;

class TemplateComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header>
                    <div id="navdiv"><TopNav/></div>
                </Header>
                <Content>
                    <div id="contentdiv"><Homepage/></div>
                </Content>
            </div>
        )
    }
}

export default TemplateComponent;