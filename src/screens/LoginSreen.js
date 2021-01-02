import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Header from '../components/Header';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import ErrorText from '../components/ErrorText';

const LoginScreen = ({params}) => (
  <View style={styles.container}>
    <Header style={styles.title}>Login</Header>
    <ErrorText error={''} />
    <Input
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
    <Input style={styles.input} placeholder="Password" secureTextEntry />
    <FilledButton title="Login" style={styles.loginButton} onPress={() => {}} />
    <TextButton title="Have u an account ? create one" onPress={() => {}} />
  </View>
);

export default LoginScreen;

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
