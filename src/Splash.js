import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { setUser } from "./redux/user/action";
import globle from "./common/globle";
import { Actions } from "react-native-router-flux";

class Splash extends Component {
  componentWillMount = () => {
    setTimeout(() => {
        Actions.Login()
    }, 10000);
  };

  render() {
    return (
            <View>
                <Text>hello Splash</Text>
            </View>
            )
  }
}
const mapStateToProps = state => {
  console.log("props states", state);
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => ({
  firstAction: value => {
    dispatch(setUser(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
