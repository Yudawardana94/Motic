import 'react-native-gesture-handler';
import React from 'react';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from "react-redux";

import Navigation from './src/navigations'
import reducer from "./src/store/reducer";

const store = createStore(reducer, applyMiddleware(thunk))

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};