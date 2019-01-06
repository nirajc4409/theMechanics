import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setUser } from "../redux/user/action";
import { Actions } from "react-native-router-flux";
import SignUpMain from "../component/SignUpMain";

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    console.log("this.props", this.props);
    return (
      <View style={{flex:1}}>
        <SignUpMain/>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("props states", state);
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => ({
  setUser: value => {
    dispatch(setUser(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
