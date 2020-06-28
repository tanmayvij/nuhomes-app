import React, { Component } from 'react';

import
{
    View,
    Text,
    StyleSheet,
    TextInput
}
from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component
{
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>The Home</Text>
                <View style={{flexDirection: "row"}}>
                    <TextInput placeholder="Search" style={styles.search} />
                    <MaterialIcons name="search" size={40} color="#FFFFFF" />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#000000",
        height: 100,
        width: "100%"
    },
    text: {
        color: "#FFFFFF",
        textTransform: "uppercase",
        fontSize: 25,
        textAlign: "center",
        marginTop: 10
    },
    search: {
        height: 36,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        marginTop: 10
    }
});