import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View style={styles.container}>
            <Text>👺ini halaman home👺</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})
