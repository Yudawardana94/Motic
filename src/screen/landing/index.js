import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

const landing = (props) => {
    return (
        <View style={styles.container}>
            <Text>🐉 ini adalah halaman landing page aplikasi {props.appName}🐉</Text>
            <Button title="to Home" onPress={() => props.navigation.navigate('Home')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})

const mapStateToprops = state => {
    return state
}
const mapDispatchToProps = {}

export default connect(mapStateToprops, mapDispatchToProps)(landing)