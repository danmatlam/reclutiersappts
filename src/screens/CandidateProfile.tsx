import React from "react";
import { Button, View } from "react-native";
import AppLayout from "../components/common/AppLayout";

import { Avatar, Layout, Text, Card } from '@ui-kitten/components';


import { useRoute, useNavigation } from '@react-navigation/native';
import { candidate } from "../components/candidates/CandidateList";
import { StyleSheet } from 'react-native';
interface paramsI {
    name: string
    candidates: candidate[]
}
const CandidateProfile = () => {

    const route = useRoute();


    const params = route.params;

    const name = params.name
    const questions = params.candidates.filter(x => x.name == name)

    return (
        <AppLayout>

            <View style={styles.avatarContainer}>
                <Avatar style={styles.avatar} shape='round' source={require('../assets/profile.png')} />
                <Text category="h1"> {name} </Text>
            </View>

            <View style={styles.content}>

                {
                    questions[0].results.map(item => (


                        <Card style={styles.card}>
                            <Text category="h6"> {item.question}   </Text>
                        
                            <Text category="s1">   sc: {item.answer} </Text>
                        </Card>




                    ))
                }



            </View>









        </AppLayout>
    );
};

export default CandidateProfile;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    avatar: {

        margin: 8,
        height: 200,
        width: 200
    },
    content: {
        margin: 8
    },
    avatarContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'


    },
    card: {
        margin:6
    }
});