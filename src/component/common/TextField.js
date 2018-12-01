import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class TextField extends Component {
  render() {
      const { placeholder,input:{onChange, value} } = this.props;
    return (
        <View style={{marginTop:15}}>
            <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width:300}}
                    {...this.props}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
            />
      </View>
    )
  }
}