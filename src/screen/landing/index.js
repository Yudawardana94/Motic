import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const landing = (props) => {
    return (
        <View style={styles.container}>
            <Text>🐉 ini adalah halaman landing page 🐉</Text>
            <Button title="to Home" onPress={() => props.navigation.navigate('Home')}/>
        </View>
    )
}

export default landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})
