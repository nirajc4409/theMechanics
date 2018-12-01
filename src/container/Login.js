import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { setUser } from "../redux/user/action";
import globle from "../common/globle";
import LoginForm from "../component/LoginForm";

class Login extends Component {
  componentWillMount() {
    // this.props.firstAction ();
  }
  render() {
    console.log("this.props", this.props);
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <LoginForm/>
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
  firstAction: value => {
    dispatch(setUser(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
