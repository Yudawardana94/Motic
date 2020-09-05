import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

export default function checkout(props) {
    //state
    const [detail, setDetail] = useState({
        orderId: "123098456876",
        cinema: "Bekasi Cyber Park CGV",
        date: "Sat, 21",
        time: "12:00",
        totalTicket: 2,
        seat: ["C2", "C3"],
        price: 40000,
        fees: 5000
    })
    const [buttonStatus, setButtonStatus] = useState('---')
    const [wallet, setWallet] = useState(15000)

    //function
    useEffect(() => {
        checkWallet()
    }, [])
    const checkWallet = () => {
        let {price, totalTicket, fees} = detail
        let totalPrice = (price * totalTicket) + fees
        if(wallet >= totalPrice) {
            console.log('silahkan bayar')
            setButtonStatus('Pay')
        } else if( wallet < totalPrice) {
            console.log('Ooops, you don`t have enough saldo')
            setButtonStatus('Top Up')
        }
    }
    const proceed = () => {
        if(buttonStatus === "Pay") {
            props.navigation.navigate('Success')
        } else if( buttonStatus === "Top Up") {
            props.navigation.navigate('TopUp')
        }
    }
    //component
    return (
        <View style={styles.checkout_container}>
            <Text style={styles.checkout_container_text}>Check detail below before checkout</Text>
            {/* film detail */}
            <View style={styles.film_detail}>
                <View style={styles.film_detail_pic} />
                <View style={styles.film_detail_description}>
                    <Text>title</Text>
                    <Text>genre - country</Text>
                    <Text>ratting</Text>
                </View>
            </View>
            {/* ---------------------------------- */}
            <View style={styles.hairline}/>
            {/* order detail */}
            <View style={styles.order_detail}>
                <View style={styles.order_detail_each}>
                    <Text>Order Id</Text>
                    <Text>{detail.orderId}</Text>
                </View>
                <View style={styles.order_detail_each}>
                    <Text>Cinema</Text>
                    <Text>{detail.cinema}</Text>
                </View>
                <View style={styles.order_detail_each}>
                    <Text>Date & time</Text>
                    <Text>{detail.date}, {detail.time} </Text>
                </View>
                <View style={styles.order_detail_each}>
                    <Text>{detail.totalTicket} Ticket</Text>
                    <Text>{detail.seat.join(', ')}</Text>
                </View>
                <View style={styles.order_detail_each}>
                    <Text>Price</Text>
                    <Text>Rp. {detail.price} ,00 x {detail.totalTicket}</Text>
                </View>
                <View style={styles.order_detail_each}>
                    <Text>Fees</Text>
                    <Text>Rp. {detail.fees} ,00</Text>
                </View>
                <View style={styles.order_detail_each}>
                    <Text>Total</Text>
                    <Text>Rp. {detail.price * detail.totalTicket}</Text>
                </View>
            </View>
            {/* ---------------------------------- */}
            <View style={styles.hairline}/>
            {/* wallet status */}
            <View style={styles.wallet}>
                <Text>My Wallet</Text>
                <Text>123098456876</Text>
            </View>
            {/* checkout button */}
            <TouchableOpacity onPress={() => proceed()} style={styles.checkout_button_touchable}>
                <View style={styles.checkout_button}>
                    <Text style={styles.checkout_button_text}>{buttonStatus}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    checkout_container: {
        marginTop: "12%",
        // backgroundColor: "tomato",
        flex: 1
    },
    checkout_container_text: {
        color: "black",
        fontSize: 25,
        padding: 10
    },
    film_detail: {
        // backgroundColor: "yellow",
        flexDirection: "row",
        padding: 10
    },
    film_detail_pic: {
        height: 150,
        width: 100,
        backgroundColor: '#ADADAD',
        borderRadius: 3,
        margin: 5
    },
    film_detail_description: {
        justifyContent: "flex-start",
        paddingHorizontal: 15
    },
    order_detail: {
        // backgroundColor: 'skyblue',
        padding: 10
    },
    order_detail_each: {
        margin: 3,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    wallet: {
        margin: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    checkout_button: {
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
    checkout_button_touchable: {
        position: "absolute", 
        bottom: 10, 
        width: '100%'
    },
    checkout_button_text: {
        color: "white"
    },
    hairline: {
        width: '95%',
        alignSelf: "center",
        height: 1,
        backgroundColor: 'black',
        margin: 10
    }
})
