import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TextButton = ({title, style, onPress}) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{title.toUpperCase()}</Text>
  </TouchableOpacity>
);

export default TextButton;

const styles = StyleSheet.create({
  container: {
    width: 320,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'blue',
    fontWeight: '500',
    fontSize: 12,
  },
});
