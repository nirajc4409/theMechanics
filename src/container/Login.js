import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setUser } from "../redux/user/action";
import LoginForm from "../component/LoginForm";
import { Actions } from "react-native-router-flux";
import firebase from 'react-native-firebase';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  _login = (values) => {
    const { setUser } = this.props;
    const {email, password} = values;
    console.log("values",values);

    firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    .then((res)=>{
      console.log("res",res);
      if(res){
        setUser({...values})
        Actions.MainContainer()
      }
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    });
  }

  render() {
    console.log("this.props", this.props);
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <LoginForm onSubmit={this._login}/>
        <TouchableOpacity onPress={()=> Actions.SignUp()}><Text>sign Up</Text></TouchableOpacity>
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
)(Login);
