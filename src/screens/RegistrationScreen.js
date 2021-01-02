import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import ErrorText from '../components/ErrorText';

const RegistrationScreen = ({params}) => (
  <View style={styles.container}>
    <Header style={styles.title}>Registration</Header>
    <ErrorText error={''} />
    <Input
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
    <Input style={styles.input} placeholder="Password" secureTextEntry />
    <FilledButton
      title="Register"
      style={styles.loginButton}
      onPress={() => {}}
    />
  </View>
);

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
