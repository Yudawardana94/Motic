import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'

export default function myWallet(props) {
    
    //state
    const [user, setUser] = useState({
        name: 'yuda Wardana', 
        saldo: 250000
    })
    const [recentTransaction, setRecentTransaction] = useState([
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
        }
    ])
    
    //function
    useEffect(() => {
        // console.log(user.saldo.toLocaleString("fr-FR"))
        // console.log(new Intl.NumberFormat(['ban', 'id']).format(user.saldo))
    }, [])

    //component
    const list_previous = (input) => {
        return (
            <View style={styles.my_wallet_list}>
                <View style={styles.my_wallet_list_pic}>

                </View>
                <View style={styles.my_wallet_list_data}>
                    <Text>{input.title}</Text>
                    <Text>{input.date}</Text>
                    <Text>{input.location}</Text>
                </View>
            </View >
        )
    }
    return (
        <View style={styles.my_wallet_container}>
            {/* header */}
            <Text>in page my myWallet</Text>
            {/* wallet status */}
            <View style={styles.wallet_box}>
                <Text>{user.name}</Text>
                <Text>IDR {user.saldo}</Text>
            </View>
            {/* recent transaction  */}
            <Text>Recent Transaction</Text>
            <FlatList
                data={recentTransaction}
                renderItem={({item}) => {
                    return list_previous(item)
                }}
                keyExtractor={item => item.idx.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: '18%', width: '100%'}}
            />
            {/* top up button */}
            <TouchableOpacity style={styles.my_wallet_button_touchable} onPress={() => props.navigation.navigate('TopUp')}>
                <View style={styles.my_wallet_button}>
                    <Text style={styles.my_wallet_button_text}>Top Up My Wallet</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    my_wallet_container: {
        flex: 1,
        alignItems: "center"
    },
    wallet_box: {
        height: 180,
        width: "95%",
        backgroundColor: 'yellow',
        margin: 15
    },
    my_wallet_list: {
        height: 150,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "yellow",
        marginVertical: 5,
        margin: 10,
        flexDirection: "row",
    },
    my_wallet_list_pic: {
        width: 90,
        backgroundColor: "violet",
        marginRight: 10
    },
    my_wallet_button: {
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
    my_wallet_button_touchable: {
        position: "absolute", 
        bottom: 10, 
        width: '100%'
    },
    my_wallet_button_text: {
        color: "white"
    },
})
