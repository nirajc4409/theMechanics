import React, {Component} from 'react';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import MainContainer from '../container/MainContainer';

export default class Routes extends Component {
  render() {
    return (
        <Router>
            <Stack key="root">
                <Scene initial  key="mainContainer" component={MainContainer} title="The Machanic"/>
            </Stack>
        </Router>
    );
  }
}