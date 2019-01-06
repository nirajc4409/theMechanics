import React, { Component } from "react";
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack
} from "react-native-router-flux";
import MainContainer from "../container/MainContainer";
import Login from "../container/Login";
import Splash from "../Splash";
import SignUp from "../container/SignUp";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Splash" component={Splash} />
          <Scene initial key="Login" component={Login} title="Login" />
          <Scene
            key="MainContainer"
            component={MainContainer}
            title="The Mechanic"
          />
          <Scene
            key="SignUp"
            component={SignUp}
            title="Join As"
          />
        </Stack>
      </Router>
    );
  }
}
