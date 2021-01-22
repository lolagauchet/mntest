import React, { Component } from 'react';
import { Button, View, Text, Image, Linking } from 'react-native';
import Moment from 'moment';

export default class NewsDetails extends Component {

    constructor(props) {
        super(props);

        this.news = props.news;
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>{this.news.title}</Text>

                <View style={styles.wrapper}>
                    <Text style={styles.tag}>{this.news.author}</Text>
                    <Text style={styles.tag}>{Moment(this.news.publishedAt).format('DD MMM YYYY')}</Text>
                </View>

                <Image
                    source={{ uri: this.news.urlToImage }}
                    style={styles.image}
                />

                <Text style={styles.content}>{this.news.description}</Text>

                <Button
                    title="Lire article"
                    color="#000"
                    onPress={() => {
                        Linking.openURL(this.news.url);
                    }}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20
    },
    image: {
        height: 250,
        width: '100%',
    },
    tag: {
        backgroundColor: '#f3f3F3',
        borderRadius: 10,
        marginRight: 10,
        padding: 8,
    },
    content: {
        fontSize: 16,
        marginVertical: 20,
    },
    wrapper: {
        flexDirection: 'row',
        marginBottom: 20
    }
};
