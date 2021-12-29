import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}

export default function App() {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <SafeAreaView style={{flex: 1}}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
}

const First = () => {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({type: 'UPDATE_COUNTER'});
  }

  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
      <Text style={{fontSize: 30}}>First: {counter}</Text>
      <Button title="+1" onPress={handleIncrement} />
    </View>
  );
};

const Second = () => {
  const counter = useSelector(selector => selector.counter);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30}}>Second: {counter}</Text>
    </View>
  );
};
