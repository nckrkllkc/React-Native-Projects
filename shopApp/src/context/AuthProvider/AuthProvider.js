import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('@user').then(userSession => {
      userSession ? setUser(JSON.parse(userSession)) : setUser(null);
      // userSession && setUser(JSON.parse(userSession));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const store = createStore(reducers, {user, isAuthLoading});
  return <Provider store={store}>{children}</Provider>;
}
