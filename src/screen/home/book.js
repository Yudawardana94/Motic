import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'

export default function book(props) {
    //state
    const [studio, setStudio] = useState([
        {
            name: 'Bekasi Cyber Park CGV',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
        {
            name: 'Bekasi Trade Center CGV',
            schedule: ['12:10', '14:20', '16:30', '18:30', '20:20']
        },
        {
            name: 'Blue Plaza Cinepolis',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
        {
            name: 'Grand Mall Bekasi',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
        {
            name: 'Grand Metropolitan premiere',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
        {
            name: 'Lagoon Avenue Bekasi CGV',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
        {
            name: 'Grand Metropolitan XXI',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
        {
            name: 'Grand Retropolitan XXI',
            schedule: ['12:00', '14:00', '16:00', '18:00', '20:00']
        },
    ])
    const [choosed, setChoosed] = useState({studio: '', schedule: ''})

    //component
    const listStudio = (input) => {
        return (
            <View style={styles.list_studio}>
                <Text style={{margin: 5, fontSize: 15, fontWeight: 'bold'}}>{input.name}</Text>
                <FlatList
                data={input.schedule}
                renderItem={({item, index}) => {
                    return listSchedule(item, input.name)
                }}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>
        )
    }
    const listSchedule = (input, studioName) => {
        console.log(input)
        return (
            <TouchableOpacity onPress={() => setChoosed({
                studio: studioName,
                schedule: input
            })}>
                <View style={[styles.list_schedule, {backgroundColor: studioName === choosed.studio && input === choosed.schedule ? 'white' : '#ADADAD'}]}>
                    <Text>{input.replace(':',' : ')}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.book_container}>
            <Text>Where to Watch ?</Text>
            <FlatList
                data={studio}
                renderItem={({item}) => {
                    return listStudio(item)
                }}
                keyExtractor={item => item.name}
                showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity onPress={() => {
                if(choosed.studio !== '') {
                    props.navigation.navigate('BookSeat')
                } else {
                    Alert.alert('choose schedule first')
                }
            }}>
                <View style={styles.button_choose}>
                    <Text>Choose Schedule</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    book_container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 40,
        backgroundColor: 'pink'
    },
    list_studio: {
        marginVertical: 10,
        padding: 5,
        paddingVertical: 15,
        backgroundColor: 'yellow',
        borderRadius: 3
    },
    list_schedule: {
        margin: 5,
        padding: 15,
        borderRadius: 3,
        backgroundColor: '#ADADAD'
    },
    button_choose: {
        padding: 20,
        backgroundColor: 'teal',
        borderRadius: 3,
        width: '55%',
        alignSelf: "center",
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})
