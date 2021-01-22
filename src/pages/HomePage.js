import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Drawer, Icon } from 'native-base';
// Service
import { getNews } from '../services/News';
// Components 
import NewsItem from '../components/NewsItem';
import DrawerMenu from '../components/DrawerMenu';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { news: [] };
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();
    }
    fetchNews() {
        getNews().then(news => this.setState({ news }));
    }

    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<DrawerMenu navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >

                <View style={styles.container}>

                    <View style={styles.view}>
                        <Text style={styles.title}>Dernières actualités</Text>
                        <TouchableOpacity onPress={() => this.openDrawer()}>
                            <Icon name='menu-outline' />
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={this.state.news}
                        renderItem={({ item }) => <NewsItem news={item} />}
                        keyExtractor={item => item.url}
                    />

                </View>

            </Drawer>
        );
    }
}

const styles = {
    container: {
        marginVertical: 55,
        marginHorizontal: 15,
        fontSize: 12
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    view: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};
