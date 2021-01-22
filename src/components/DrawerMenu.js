import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';


export default class NewsItem extends Component {

    render() {

        const goToHome = () => {
            Actions.home();
        };

        const goToUser = () => {
            Actions.userDetail();
        };

        return (

            <View style={styles.container}>

                <Text style={styles.title}>Menu</Text>

                <TouchableOpacity onPress={goToHome}>
                    <View style={styles.wrapper}>
                        <Icon name='home-outline' style={{ fontSize: 20 }} />
                        <Text style={styles.menuItem}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToUser}>

                    <View style={styles.wrapper}>
                        <Icon name='person-outline' style={{ fontSize: 20 }} />
                        <Text style={styles.menuItem}>Profil</Text>
                    </View>

                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#fff',
        height: '100%',
        paddingVertical: 55,
        paddingHorizontal: 20
    },
    wrapper: {
        alignItems: 'baseline',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    menuItem: {
        fontSize: 16,
        marginLeft: 10,
    },
};
