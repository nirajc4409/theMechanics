import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

class SignUpMain extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  _signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
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
