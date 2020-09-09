import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity , Image} from 'react-native'
import {connect} from 'react-redux'
import {REACT_APP_IMAGE_URL} from '@env'

//import action
import {getInitialData} from '../../store/action'

const index = (props) => {
    // console.log(props.appName,'ini appnamenya buoosss')
    // console.log(props?. initialNowPlaying?. length,'ini initial now playing buoosss')
    //state
    console.log(REACT_APP_IMAGE_URL,'ini image urlnya')

    //function
    useEffect(() => {
        props.getInitialData()
    }, [])

    //local component
    const nowPlayingComp = (input) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Detail',{id: input.id})}>
                <View style={styles.now_playing_card}>
                    <Image
                        style={styles.now_playing_pic}
                        source={{
                        uri: `${REACT_APP_IMAGE_URL}${input.poster_path}`,
                        }}
                    />
                </View> 
                <Text style={{alignSelf: "center"}}>{input.title}</Text>
            </TouchableOpacity>
        )
    }
    const genreComp = (input) => {
        return  (
            <View style={styles.movie_category_card}>
                <View style={styles.movie_category_card_pict}>
                    <Text>{input.name}</Text>
                </View>
            </View>
        )
    }
    const comingSoonComp = (input) => {
        return (
            <View style={styles.coming_soon_card}>
                <Image
                    style={styles.now_playing_pic}
                    source={{
                    uri: `${REACT_APP_IMAGE_URL}${input.backdrop_path}`,
                    }}
                />
            </View> 
            // <Text style={{alignSelf: "center"}}>{input.title}</Text>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{backgroundColor: "#pink", marginBottom: 10}}>
                {/* //account info */}
            <View style={styles.account_info}>
                <View style={styles.avatar}/>
                <View style={styles.avatar_info}>
                    <Text>Guest,</Text>
                    <Text>IDR 0,-</Text>
                </View>
            </View>
            {/* now playing */}
            <View style={styles.now_playing}>
                <Text>Now Playing</Text>
                <View style={styles.now_playing_list}>
                <FlatList
                    data={props?. initialNowPlaying}
                    renderItem={({item}) => {
                        // console.log(item,'ini lohhh itemnya')
                        return nowPlayingComp(item)
                    }}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                </View>
            </View>
            {/* movie genre */}
            <View style={styles.movie_category}>
                <Text>Movie Category</Text>
                <View style={styles.movie_category_list}>
                    <FlatList
                        data={props?. initialGenre}
                        renderItem={({item}) => {
                            // console.log(item,'ini lohhh itemnya')
                            return genreComp(item)
                        }}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={styles.movie_category_card}>
            </View>
                </View>
            </View>
            {/* comingsoon */}
            <View style={styles.coming_soon}>
                <Text>Coming Soon</Text>
                <View style={styles.coming_soon_list}>
                <FlatList
                    data={props?. initialCommingSoon}
                    renderItem={({item}) => {
                        return comingSoonComp(item)
                    }}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                </View>
            </View>
            {/* banner */}
            <View style={styles.banner}>
                <Text>Holiday Promo</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    getInitialData
}

export default connect(mapStateToProps, mapDispatchToProps)(index)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: "center",
    },
    account_info: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        margin: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'salmon',
        marginRight: 20
    },
    avatar_info: {

    },
    now_playing: {
        margin: 10,
        // borderWidth: 1
    },
    now_playing_list: {
        flexDirection: "row"
    },
    now_playing_card: {
        width: 150,
        height: 250,
        borderRadius: 5,
        backgroundColor: "#c4c4c4",
        margin: 5,
        shadowColor: "#000",
        elevation: 5,
    },
    now_playing_pic: {
        width: '100%', 
        height: '100%', 
        borderRadius: 3,
    },
    movie_category: {
        margin: 10
    },
    movie_category_list: {
        flexDirection: "row"
    },
    movie_category_card: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    movie_category_card_pict: {
        backgroundColor: 'skyblue',
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: 'center'
    },
    coming_soon: {
        margin: 10,
    },
    coming_soon_list: {
        flexDirection: "row"
    },
    coming_soon_card: {
        backgroundColor: 'tomato',
        width: 180,
        height: 120,
        margin: 5,
        borderRadius: 3
    },
    banner: {
        backgroundColor: 'limegreen',
        width: '90%',
        height: 120,
        alignSelf: 'center',
        borderRadius: 5
    }
})
