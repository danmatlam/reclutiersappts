import React, {useState} from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

import Pusher from 'pusher-js/react-native';

const _ = require('lodash');




const data =
{
  "candidates": [
    {
      "question": "Frontend Skills",
      "name": "Luke Skywalker",
      "answer": 5
    },
    {
      "question": "Leadership",
      "name": "Luke Skywalker",
      "answer": 5
    },
    {
      "question": "Motivated with company visison",
      "name": "Luke Skywalker",
      "answer": 5
    },
    {
      "question": "Frontend Skills",
      "name": "Obi-Wan Kenobi",
      "answer": 3
    },
    {
      "question": "Leadership",
      "name": "Obi-Wan Kenobi",
      "answer": 1
    },
    {
      "question": "Motivated with company visison",
      "name": "Obi-Wan Kenobi",
      "answer": 4
    },
    {
      "question": "Frontend Skills",
      "name": "Darth Vader",
      "answer": 1
    },
    {
      "question": "Leadership",
      "name": "Darth Vader",
      "answer": 2
    },
    {
      "question": "Motivated with company visison",
      "name": "Darth Vader",
      "answer": 2
    },
    {
      "question": "Frontend Skills",
      "name": "Han Solo",
      "answer": 2
    },
    {
      "question": "Leadership",
      "name": "Han Solo",
      "answer": 2
    },
    {
      "question": "Motivated with company visison",
      "name": "Han Solo",
      "answer": 2
    },
    {
      "question": "Frontend Skills",
      "name": "Princess Leia Organa",
      "answer": 2
    },
    {
      "question": "Leadership",
      "name": "Princess Leia Organa",
      "answer": 3
    },
    {
      "question": "Motivated with company visison",
      "name": "Princess Leia Organa",
      "answer": 3
    },
    {
      "question": "Frontend Skills",
      "name": "R2-D2",
      "answer": 3
    },
    {
      "question": "Leadership",
      "name": "R2-D2",
      "answer": 3
    },
    {
      "question": "Motivated with company visison",
      "name": "R2-D2",
      "answer": 1
    }
  ],
  "loading": false,
  "error": false


};


interface result {
  question: string,
  answer: string
}
interface candidate {
  name: string,
  results: result[]
  score: number
}






export const CandidateList = () => {


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
  candidates = _.orderBy(candidates, 'score',  ['desc', 'asc']);





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
    />
  );

  return (
    <>
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