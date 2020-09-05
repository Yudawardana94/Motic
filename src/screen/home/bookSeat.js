import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'

export default function bookSeat(props) {
    //state
    const [seat, setSeat] = useState({
        row: ['A','B','C','D','E','F','G','H','I','J'],
        column: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
    })
    const [booked, setBooked] = useState(['5E', '6E', '7E'])
    const [selected, setSelected] = useState([])
    const [price, setPrice] = useState(40)
    const colorLegend = {
        selected: 'blue',
        available: 'white',
        booked: 'gray'
    }
    const maxBook = 10
    

    //component
    const seatColumn = (column) => {
        return (
            <View>
                {/* <Text>{column}</Text> */}
                <FlatList
                    data={seat.row}
                    renderItem={({item, index}) => {
                        return seatRow(column, item)
                    }}
                    keyExtractor={item => item}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
    const seatRow = (column, row) => {
        return (
            <TouchableOpacity onPress={() => {
                if(selected.length < maxBook) {
                    let index = selected.indexOf(`${column}${row}`)
                    console.log(index)
                    if(index >= 0) {
                        let newArr = [...selected]
                        newArr.splice(index,1)
                        setSelected(newArr)
                    } else {
                        setSelected([...selected, `${column}${row}`])
                    }
                } else {
                    let index = selected.indexOf(`${column}${row}`)
                    console.log(index)
                    if(index >= 0) {
                        let newArr = [...selected]
                        newArr.splice(index,1)
                        setSelected(newArr)
                    }
                }
            }}>
                <View style={[styles.seat, {backgroundColor: booked.includes(`${column}${row}`) ? colorLegend.booked : selected.includes(`${column}${row}`) ? colorLegend.selected: colorLegend.available}]}>
                    <Text style={{color: booked.includes(`${column}${row}`) ? 'white' : 'black'}}> {column+row} </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.book_seat_container}>
            <View style={styles.legend}>
                <View style={styles.legend_each}>
                    <View style={{marginRight: 10, width: 20, height: 20, backgroundColor: colorLegend.selected}}/>
                    <Text>Selected</Text>
                </View>
                <View style={styles.legend_each}>
                    <View style={{marginRight: 10, width: 20, height: 20, backgroundColor: colorLegend.available}}/>
                    <Text>Available</Text>
                </View>
                <View style={styles.legend_each}>
                    <View style={{marginRight: 10, width: 20, height: 20, backgroundColor: colorLegend.booked}}/>
                    <Text>Booked</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={seat.column}
                    renderItem={({item, index}) => {
                        return seatColumn(item)
                    }}
                    keyExtractor={item => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.screen}>
                <Text>Screen</Text>
            </View>
            <View style={styles.summary}>
                <View style={styles.summary_each}>
                    <Text style={{marginVertical: 5}}>Total Price</Text>
                    <Text>Rp {selected.length !== 0 ?(selected.length * price).toFixed(3) : '0'},00</Text>
                </View>
                <View style={{width: 1, height: '100%', backgroundColor: 'green'}}/>
                <View style={styles.summary_each}>
                    <Text style={{marginVertical: 5}}>Choosen Seat</Text>
                    <Text style={{textAlign: "center"}}>{selected.join(', ') || '-'}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                if(selected.length === 0) {
                    Alert.alert('choose your seats')
                } else {
                    props.navigation.navigate('Checkout')
                }
            }} style={styles.button_proceed}>
                <View style={{alignItems: "center", justifyContent: 'center', width: '100%', height: '100%'}}>
                    <Text>Proceed</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    book_seat_container: {
        flex: 1,
        marginTop:40,
        paddingHorizontal: 10
    },
    legend: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        padding: 8,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    legend_each: {
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    seat: {
        height: 35,
        width: 35,
        borderRadius: 4,
        backgroundColor: 'gray',
        margin: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    screen: {
        width: '100%',
        height: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 15
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 4,
        position:"absolute",
        bottom: 70,
        width: '100%',
        alignSelf: 'center'
    },
    summary_each: {
        marginHorizontal: 10,
        width: '50%',
        height: 70,
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "space-between",
    },
    button_proceed: {
        height: 50,
        width: '100%',
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: 'skyblue',
        borderRadius: 4,
        position: "absolute",
        bottom: 0
    }
})
