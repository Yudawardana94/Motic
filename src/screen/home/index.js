import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const index = (props) => {
    return (
        <View style={styles.container}>
            {/* <Text>👺ini halaman home👺</Text> */}
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
                    <View style={styles.now_playing_card}/>
                    <View style={styles.now_playing_card}/>
                    <View style={styles.now_playing_card}/>
                </View>
            </View>
            {/* movie genre */}
            <View style={styles.movie_category}>
                <Text>Movie Category</Text>
                <View style={styles.movie_category_list}>
                    <View style={styles.movie_category_card}>
                        <View style={styles.movie_category_card_pict}/>
                        <Text>pertama</Text>
                    </View>
                    <View style={styles.movie_category_card}>
                        <View style={styles.movie_category_card_pict}/>
                        <Text>kedua</Text>
                    </View>
                    <View style={styles.movie_category_card}>
                        <View style={styles.movie_category_card_pict}/>
                        <Text>ketiga</Text>
                    </View>
                </View>
            </View>
            {/* comingsoon */}
            <View style={styles.coming_soon}>
                <Text>Coming Soon</Text>
                <View style={styles.coming_soon_list}>
                    <View style={styles.coming_soon_card}/>
                    <View style={styles.coming_soon_card}/>
                    <View style={styles.coming_soon_card}/>
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

export default index

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
        borderWidth: 1,
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
        borderWidth: 1
    },
    now_playing_list: {
        flexDirection: "row"
    },
    now_playing_card: {
        width: 150,
        height: 250,
        borderRadius: 5,
        backgroundColor: "#c4c4c4",
        margin: 5
    },
    movie_category: {
        margin: 10,
        borderWidth: 1
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
        borderRadius: 3
    },
    coming_soon: {
        margin: 10,
        borderWidth: 1
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
