import React, { ReactChildren } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { AppHeader } from '../common/AppHeader'
import {PopUp} from '../common/PopUp'
export default function AppLayout(props: { children: React.ReactNode }) {
    return (



        <View style={styles.container}>
            <AppHeader />
            <PopUp/>
            {/* <ScrollView> */}
                {props.children}
            {/* </ScrollView> */}

        </View>



    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    container: {

        flexDirection: "column",
        flex: 3,

        backgroundColor: '#f5f5f5'
    }
});
