import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native'

export default function MyTickets() {
    //state
    const [ticketData, setTicketData] = useState([
        {
            idx: 0,
            title: "Train to Busan",
            date: "12/08/2020",
            location: "CGV Paris van Java Mall"
        },
        {
            idx: 1,
            title: "Train to Bandung",
            date: "12/08/2020",
            location: "CGV Paris van Java Mall"
        },
        {
            idx: 2,
            title: "Train to Jakarta",
            date: "12/08/2020",
            location: "CGV Paris van Java Mall"
        },
        {
            idx: 3,
            title: "Train to Bekasi",
            date: "12/08/2020",
            location: "CGV Paris van Java Mall"
        },
        {
            idx: 4,
            title: "Train to Bekasi",
            date: "12/08/2020",
            location: "CGV Paris van Java Mall"
        },
    ])

    //component
    const list_ticket = (input) => {
        return <TouchableOpacity style={styles.my_ticket_list}>
        <View style={styles.my_ticket_list_pic}>

        </View>
        <View style={styles.my_ticket_list_data}>
            <Text>{input.title}</Text>
            <Text>{input.date}</Text>
            <Text>{input.location}</Text>
        </View>
    </TouchableOpacity >
    }
    return (
        <View style={styles.my_ticket_container}>
            <Text style={styles.my_ticket_header}>Mytickets Page</Text>
            <View style={styles.my_ticket_top_tab}>
                <TouchableOpacity style={styles.my_ticket_top_tab_option}>
                    <Text>New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.my_ticket_top_tab_option}>
                    <Text>Used</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={ticketData}
                renderItem={item => {
                    return list_ticket(item.item)
                }}
                keyExtractor={item => item.idx.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

let fullHeight = Dimensions.get("window").height
let fullWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    my_ticket_container: {
        paddingHorizontal: 10,
        flex: 1
    },
    my_ticket_header : {
        fontSize: 25,
        paddingVertical: 15
    }    ,
    my_ticket_top_tab: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20
    },
    my_ticket_top_tab_option: {
        marginHorizontal: 10,
        width: "45%",
        backgroundColor: "teal",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        height: 40
    },
    my_ticket_list: {
        height: 150,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "yellow",
        marginVertical: 5,
        padding: 10,
        flexDirection: "row"
    },
    my_ticket_list_pic: {
        width: 90,
        backgroundColor: "violet",
        marginRight: 10
    },
    my_ticket_list_data: {

    }
})
