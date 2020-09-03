import React, { useState } from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import Pusher from 'pusher-js/react-native';

const _ = require('lodash');







export interface result {
  question: string,
  answer: string
}
export interface candidate {
  name: string,
  results: result[]
  score: number
}






export const CandidateList = () => {

  const navigation = useNavigation();

  //pushher
  const pusher = new Pusher('3b49318cc8a294ab90cd', { cluster: 'us2' });
  const channel = pusher.subscribe('my-channel');
  const [message, setMessage] = useState({})
  channel.bind('my-event', function (data: string) {
    const payload = data
    setMessage(payload)
  });


  //mocking
  const aux = _.groupBy(message, 'name');
  let candidates: candidate[] = [];
  for (const key in aux) {
    const payload = aux[key];
    const score = (payload.reduce((accum: number, item: result) => accum + item.answer, 0)) / payload.length
    candidates.push({
      name: key,
      results: payload,
      score: Math.floor(score)
    });
  };
  candidates = _.orderBy(candidates, 'score', ['desc', 'asc']);





  const renderItemAccessory = (score: string) => (

    <Text category='label'>{score}/5</Text>

  );

  const renderItemIcon = (props: any) => (
    <Icon {...props} name='person' />
  );

  const renderItem: any = (item: any, index: number) => (

    <ListItem
      title={`${item.item.name}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => renderItemAccessory(item.item.score)}
      onPress={() => navigation.navigate('CandidateProfile', {
        name: item.item.name,
        candidates: candidates
      })}

    />
  );

  return (
    <>

      <Text category='label' style={{ padding: 9 }}>Candidatos</Text>


      <List
        style={styles.container}
        data={candidates}
        renderItem={renderItem}
      />




    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});