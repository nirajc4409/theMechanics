import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { setUser } from "../redux/user/action";
import globle from "../common/globle";

class MainContainer extends Component {
  componentWillMount() {
  }
  render() {
    console.log("this.props", this.props);
    return (
      <View>
        <Text style={globle.titleFont}>{this.props.user.email}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log("props states", state);
  return {
    user: state.userProfile
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
)(MainContainer);
