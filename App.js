import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Routes from './src/config/Route';
import {store, persistor} from './src/redux/Store';
import MainContainer from './src/container/MainContainer';
import firebase from 'react-native-firebase';

const androidConfig = {
  clientId: '289025376909-ennvi8mhsp006afecpi5c3drp2sg3t4g.apps.googleusercontent.com',
  apiKey: 'AIzaSyCQ3pICKJJPBeDZBL4KButSpgGJ5jtUCro',
  appId: 'x',
  databaseURL: 'x',
  storageBucket: 'x',
  messagingSenderId: 'x',
  projectId: 'themechanic-60b86',


  // enable persistence by adding the below flag
  persistence: true,
};
const kittensApp = firebase.initializeApp(androidConfig)
export default class App extends Component {

  componentWillMount() {
    kittensApp.onReady().then((app) => {
      firebase.app('themechanic').auth().signInAnonymously().then((user) => {
          console.log('themechanic user ->', user.toJSON());
      });
   });
    console.log("called....");
    firebase.auth().signInAnonymously()
      .then(() => {
        this.setState({
          isAuthenticated: true,
        });
      }).catch((err)=>{
        console.log("err",err);
      })
  }

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