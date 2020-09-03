import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = (props:any) => (
  <View {...props}>
    <Text category='h6'>Hola!</Text>
  </View>
);



export const PopUp = () => (
  <React.Fragment>

    <Card style={styles.card} header={Header} >
      <Text>
        Aqui podrás ver a los canidatos que han pasado al siguiente
        nivel en el proceso de selección
      </Text>
    </Card>

  </React.Fragment>
);

const styles = StyleSheet.create({
  card: {
    height:'auto',
    margin: 9,
  },
});