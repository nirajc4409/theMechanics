import React, { Component } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import { setUser } from "../redux/user/action";
import globle from "../common/globle";
import { Field, reduxForm } from "redux-form";
import TextField from "./common/TextField";
import { Actions } from "react-native-router-flux";

class LoginForm extends Component {
  
  _login = (values) =>{
    const { setUser } = this.props;
    console.log("values",values);
    if(values){
      setUser({...values})
      Actions.MainContainer()
    }
  }
  
  render() {
    const { handleSubmit } = this.props;
    console.log("this.props", this.props);
    return (
      <View>
        <Field name="email" component={TextField} type="text" placeholder={"Email"} />

        <Field name="password" component={TextField} type="text" placeholder={"Password"}/>

        <View style={{marginTop:20}}>
          <Button
            onPress={handleSubmit(this._login)}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
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
)(
  reduxForm({
    // a unique name for the form
    form: "LoginForm"
  })(LoginForm)
);
