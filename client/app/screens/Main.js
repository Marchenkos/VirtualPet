import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import MainPageContainer from './app/containers/MainContainer';
import rootReducer from './app/reducers/rootReducer';

const store = createStore(rootReducer);

export default function Main() {
  return (
    <Provider store={store}>
      <MainPageContainer />
    </Provider>
  );
}
