import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

export default function Profile(props) {
    return (
        <View>
            <Text>ini adalah profile</Text>
            <Button title="to home" onPress={() => props.navigation.navigate('Landing')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
