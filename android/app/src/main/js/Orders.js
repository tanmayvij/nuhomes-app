import React, { Component } from 'react';

import SyncStorage from 'sync-storage';

export default class Orders extends Component
{
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        if(!1)
        {
            this.props.navigation.navigate("Login", {"returnScreen": "Orders"});
        }
        else
        {
            // Fetch orders
        }
    }
    
    render() {
        return(
            <>
            </>
        )
    }
}