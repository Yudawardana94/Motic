import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Dimensions, TouchableOpacity } from 'react-native'

export default function topUp(props) {
    //state
    const [ammount, setAmmount] = useState('0')
    const defaultAmmount = [10000, 20000, 50000, 100000, 150000, 200000]

    //function 

    //component
    const def_top_up = (input) => {
        return (
            <TouchableOpacity style={{width: '50%'}} onPress={() => setAmmount(input.toString())}>
                <View style={styles.def_top_up_each}>
                    <Text>IDR</Text>
                    <Text>{input}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.top_up_container}>
            <Text style={styles.top_up_header}>Top UP</Text>
            <TextInput
            style={styles.top_up_textinput}
            onChangeText={text => setAmmount(text)}
            onFocus={() => {setAmmount('')}}
            value={ammount}
            keyboardType={'number-pad'}
            />
            <Text style={styles.top_up_def_header_text}>Choose by Template</Text>
            <View style={{width: '100%', justifyContent: "space-between"}}>
                <FlatList
                    data={defaultAmmount}
                    renderItem={({item}) => {
                        return def_top_up(item)
                    }}
                    keyExtractor={item => item.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width: '100%', flexDirection: "column", alignSelf: "center"}}
                    // style={{ marginBottom: '18%', width: '100%', flexDirection: "column", justifyContent: "space-between"}}
                    numColumns={2}
                />
            </View>
            <TouchableOpacity style={styles.top_up_button_touchable} onPress={() => props.navigation.navigate('Success')}>
                <View style={styles.top_up_button}>
                    <Text style={styles.top_up_button_text}>Top Up Now</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const fHeight = Dimensions.get('screen').height
const fWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    top_up_container: {
        flex: 1,
        // backgroundColor: 'skyblue',
        marginTop: 28
    },
    top_up_header: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    top_up_textinput: { 
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        width: '95%',
        alignSelf: "center" ,
        margin: 10,
        paddingHorizontal: 15,
        borderRadius: 3
    },
    def_top_up_each: {
        width: fWidth * 45 / 100,
        height: 60,
        backgroundColor: '#ADADAD',
        margin: 10,
        padding: 10,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    top_up_def_header_text: {
        margin: 10,
        fontSize: 14
    },
    top_up_button: {
        margin: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        width: '90%',
        alignSelf: "center",
        backgroundColor: 'teal',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    top_up_button_touchable: {
        position: "absolute", 
        bottom: 10, 
        width: '100%'
    },
    top_up_button_text: {
        color: "white"
    },
})
