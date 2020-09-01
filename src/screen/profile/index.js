import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList} from 'react-native'

export default function Profile(props) {
    //state
    const [profileMenu, setProfileMenu] = useState(['Edit Profile', 'My Wallet', 'Change Language', 'Help Center', 'Rate Motic App'])

    //component
    const list_menu = (input) => {
        return <TouchableOpacity>
            <View style={styles.lis_menu_each}>
                <Text>Ico</Text>
                <Text style={styles.text_list_menu_each}>{input}</Text>
            </View>
        </TouchableOpacity>
    }
    return (
        <View style={styles.profile_container}>
            <View style={{alignSelf: "center", alignItems: "center", margin: 30}}>
                <View style={styles.profile_pic} />
                <View style={styles.profile_data}>
                    <Text>Yuda Wardana</Text>
                    <Text>yudawardana@mail.com</Text>
                </View>
            </View>
            <FlatList
                data={profileMenu}
                renderItem={({item}) => {
                    return list_menu(item)
                }}
                keyExtractor={item => item.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    profile_container: {
        paddingHorizontal: 10,
        flex: 1
    },
    profile_pic: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: "#ADADAD",
    },
    profile_data: {
        alignItems: "center",
        marginTop: 30
    },
    lis_menu_each: {
        flexDirection: "row",
        margin: 15,
        marginLeft: 30,
        justifyContent: "flex-start"
    },
    text_list_menu_each: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: '600'
    }
})
