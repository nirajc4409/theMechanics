import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Routes from './src/config/Route';
import {store, persistor} from './src/redux/Store';
import MainContainer from './src/container/MainContainer';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Routes/>
          </PersistGate>
        </Provider>
    );
  }
}