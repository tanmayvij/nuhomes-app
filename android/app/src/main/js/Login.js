import React, { Component } from 'react';

import
{
    View,
    Text,
    TextInput,
    TouchableOpacity
}
from 'react-native';

import Header from './Header';

export default class Login extends Component
{
    constructor() {
        super();
        this.state = {
            "email": "",
            "password": ""
        };
    }

    doLogin()
    {
        if(this.state.password.length < 4 || !this.isEmail(this.state.email))
        {
            alert("Please enter a valid email address and password.");
        }
        else
        {
            // Use the woocommerce API wrapper

            this.props.navigation.navigate(this.props.route.params.returnScreen);
        }
    }
    
    isEmail(email) {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return(
            <View>
                <Header />
                <TextInput placeholder="Email" />
                <TextInput placeholder="Password" secureTextEntry={true} />
                <TouchableOpacity onPress={() => this.doLogin()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}