import React, { Component } from 'react';

import
{
    View,
    Text,
    Image
}
from 'react-native';

import Header from './Header';

export default class Home extends Component
{
    render() {
        return(
            <>
                <Header />
                <Image source={{uri: "https://nuhomes.in/wp-content/app-banner.jpg"}} />
            </>
        )
    }
}