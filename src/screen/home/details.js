import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import IconFA from 'react-native-vector-icons/FontAwesome'
// import Icon2 from "react-native-vector-icons/FontAwesome";

export default function details(props) {
    //state
    const [cast, setCast] = useState([
        {idx: 1, name: 'Jono Bro'},
        {idx: 2, name: 'Haely Sis'},
        {idx: 3, name: 'Lauren ch'},
        {idx: 4, name: 'Fill Marryberry'},
        {idx: 5, name: 'Jhon Taslim'},
        {idx: 6, name: 'Anton Sujarwo'},
        {idx: 7, name: 'Hello World'},
    ])

    //local component
    const castComp = (input) => {
        return  (
            <View style={styles.cast_card}>
                <View style={styles.cast_card_pict}/>
                <Text>{input.name}</Text>
            </View>
        )
    }
    return (
        <View>
            <ScrollView style={{ marginBottom: 10}}>
                {/* movie banner */}
            <View style={styles.movie_banner}>
                <IconFA name='picture-o' size={50} color={'gray'}/>
            </View>
            {/* title genre country rating */}
            <View style={styles.movie_head_info}>
                <Text>Ini Judul Besarnya</Text>
                <View style={{flexDirection: "row"}}>
                    <Text>Genre</Text>
                    <Text style={{marginHorizontal: 5}}>-</Text>
                    <Text>Negara</Text>
                </View>
                <Text>Rating 7/10</Text>
            </View>
            {/* description */}
            <View style={styles.description}>
                <Text>Storyline</Text>
                <Text>
                Audio Description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics.
                </Text>
            </View>
            {/* cast */}
            <View style={styles.cast}>
                <Text>Cast</Text>
                <FlatList
                    data={cast}
                    renderItem={item => {
                        // console.log(item,'ini lohhh itemnya')
                        return castComp(item.item)
                    }}
                    keyExtractor={item => item.idx.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            {/* book button */}
            <TouchableOpacity onPress={() => props.navigation.navigate('BookSeat')}>
                <View style={styles.book_button}>
                        <Text>Continue to Book</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

let fullHeight = Dimensions.get('screen').height

const styles = StyleSheet.create({
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
        borderRadius: 4
    }
})
