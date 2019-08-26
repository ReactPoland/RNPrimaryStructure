import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    TextInput,
    StyleSheet,
    View,
    Text,
  } from 'react-native'

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen'

import i18next from '../../translation'

import api from '../../network/api'

const propTypes = {
}

export default class Tests extends Component {
  static navigationOptions = {
    title: ' '
  }

  state = {
    password: '',
    isPassed: false
  }

  render () {
    const { isPassed, password } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          accessible
          accessibilityLabel={'PasswordInput'}
          testID={'PasswordInput'}
          style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginHorizontal: 10 }}
          onChangeText={password => this.setState({ password })}
          secureTextEntry />
        <Button
          accessible
          accessibilityLabel={'ConfirmButton'}
          onPress={() => { password === '123456' && this.setState({ isPassed: true })}}
          title={isPassed ? "Test passed" : "Test"}
          color={isPassed ? 'green' : 'blue'} />
        <Text style={styles.description}>1. Use <RedText>yarn build:android</RedText> or <RedText>yarn build:ios</RedText> for create app to example test.</Text>
        <Text style={styles.description}>2. Run your build with <RedText>yarn test:android</RedText> or <RedText>yarn test:ios.</RedText></Text>
      </View>
    )
  }
}

const RedText = (props) => (
  <Text style={[styles.description, { color: 'red' } ]}>
    {props.children}
  </Text>
)



Tests.propTypes = propTypes

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    description: {
      paddingHorizontal: 35,
      paddingVertical: 5,
      fontSize: 18,
      color: Colors.dark,
    }
})
