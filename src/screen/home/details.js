import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native'
import {connect} from 'react-redux'
import {REACT_APP_IMAGE_URL} from '@env'

import {getDetailByid} from '../../store/action'

function details(props) {
    console.log(props.route?.params?.id,'====')
    console.log('iniiiiiiiii----=-=-=-=-=-=-=',props.detailMovie)

    //state
    const { original_title, genres, original_language, vote_average, overview, credits, backdrop_path } = props.detailMovie

    //function 
    useEffect(() => {
        console.log('panggil ini dulu')
        props.getDetailByid(props.route?.params?.id)
    },[])
    
    //local component
    const castComp = (input) => {
        return  (
            <View style={styles.cast_card}>
                <View style={styles.cast_card_pict}>
                    <Image
                        style={styles.now_playing_pic}
                        source={{
                        uri: `${REACT_APP_IMAGE_URL}${input.profile_path}`,
                        }}
                    />
                </View>
                <Text>{input.name}</Text>
                {/* <Text>as</Text>
                <Text>{input.character}</Text> */}
            </View>
        )
    }
    return (
        <View style={styles.detail_container}>
            <ScrollView style={{ marginBottom: 10}}>
                {/* movie banner */}
            <View style={styles.movie_banner}>
                <Image
                    style={styles.now_playing_pic}
                    source={{
                    uri: `${REACT_APP_IMAGE_URL}${backdrop_path}`,
                    // uri: `${REACT_APP_IMAGE_URL}${backdrop_path}`,
                    }}
                />
            </View>
            {/* title genre country rating */}
            <View style={styles.movie_head_info}>
                <Text>{original_title}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text>{genres[0].name}</Text>
                    <Text style={{marginHorizontal: 5}}>-</Text>
                    <Text>{original_language}</Text>
                </View>
                <Text>Rating {vote_average}/10</Text>
            </View>
            {/* description */}
            <View style={styles.description}>
                <Text>Storyline</Text>
                <Text>{overview}</Text>
            </View>
            {/* cast */}
            <View style={styles.cast}>
                <Text>Cast</Text>
                <FlatList
                    data={credits?.cast}
                    renderItem={({item}) => {
                        return castComp(item)
                    }}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            </ScrollView>
            {/* book button */}
            {
                props.isLogin ? <TouchableOpacity onPress={() => props.navigation.navigate('BookSeat')}>
                <View style={styles.book_button}>
                        <Text>Continue to Book</Text>
                </View>
            </TouchableOpacity> : <View />
            }
        </View>
    )
}

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    getDetailByid
}

export default connect(mapStateToProps, mapDispatchToProps)(details)

let fullHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
    detail_container: {
        flex: 1,
        paddingBottom: 10
    },
    movie_banner: {
        height: fullHeight * 35 / 100,
        backgroundColor: "skyblue",
        alignItems: "center",
        justifyContent: "center"
    },
    movie_head_info: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    description: {
        margin: 10
    },
    cast: {
        margin: 10
    },
    cast_list: {
        flexDirection: "row"
    },
    cast_card: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    now_playing_pic: {
        width: '100%', 
        height: '100%', 
        borderRadius: 3,
    },
    cast_card_pict: {
        backgroundColor: 'skyblue',
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 3
    },
    book_button: {
        width: 350,
        height: 55,
        backgroundColor: "violet",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    }
})
