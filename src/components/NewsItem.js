import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Moment from 'moment';

export default class NewsItem extends Component {

    constructor(props) {
        super(props);

        this.news = props.news;
    }

    render() {

        const goToPostDetails = () => {
            Actions.newsDetail({
                news: this.news,
            });
        };

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={goToPostDetails}>

                    <Card>
                        <CardItem >
                            <Body style={styles.wrapper}>
                                <View style={styles.infos}>
                                    <Text style={styles.author}>{this.news.author}</Text>
                                    <Text style={styles.title}>{this.news.title}</Text>
                                    <Text style={styles.date}>{Moment(this.news.publishedAt).format('DD MMM YYYY')}</Text>
                                </View>
                                <Image
                                    source={{ uri: this.news.urlToImage }}
                                    style={styles.image}
                                />
                            </Body>
                        </CardItem>
                    </Card>

                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    container: {
        marginVertical: 10,
        fontSize: 12
    },
    date: {
        fontSize: 10
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginVertical: 10
    },
    infos: {
        width: '70%',
        paddingRight: 10
    },
    image: {
        width: 100,
        height: 100,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};
