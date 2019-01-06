import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

class SignUpMain extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    console.log("this.props", this.props);
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity><Text>sign Up</Text></TouchableOpacity>
      </View>
    );
  }
}
export default SignUpMain;
