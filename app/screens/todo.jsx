import React from 'react';
import List from '../components/list';


export default function TodoView(props) {
  return (
    <List collection={props.collection} />
  );
}
