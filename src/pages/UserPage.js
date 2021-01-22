import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Drawer, Icon } from 'native-base';
// Components 
import DrawerMenu from '../components/DrawerMenu';

export default class UserPage extends Component {

    openDrawer() {
        this.drawer._root.open()
    };
    closeDrawer() {
        this.drawer._root.close()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<DrawerMenu navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >

                <View style={styles.container}>

                    <View style={styles.view}>
                        <Text style={styles.title}>Mon profil</Text>

                        <TouchableOpacity onPress={() => this.openDrawer()}>
                            <Icon name='menu-outline' />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.intro}>
                        <Icon name='person-circle-outline' style={{ fontSize: 80 }} />
                        <Text style={styles.name}>Lola Gauchet</Text>
                    </View>

                    <View style={styles.wrapper}>
                        <Icon name='location-outline' style={{ fontSize: 20 }} />
                        <Text style={styles.info}>1 impasse des Venetes 44100 NANTES</Text>
                    </View>

                    <View style={styles.wrapper}>
                        <Icon name='call-outline' style={{ fontSize: 20 }} />
                        <Text style={styles.info}>06 20 53 13 35</Text>
                    </View>

                    <View style={styles.wrapper}>
                        <Icon name='send-outline' style={{ fontSize: 20 }} />
                        <Text style={styles.info}>lola.gauchet@gmail.com</Text>
                    </View>

                </View>

            </Drawer>
        );
    }
}

const styles = {
    container: {
        marginVertical: 55,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    wrapper: {
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 0,
        paddingVertical: 20
    },
    intro: {
        alignItems: 'center',
        backgroundColor: '#f3f3F3',
        marginBottom: 10,
        paddingVertical: 20,
    },
    name: {
        fontSize: 20,
    },
    info: {
        fontSize: 16,
        marginLeft: 10
    }
};
