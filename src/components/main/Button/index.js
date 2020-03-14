import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity
    style={styles.Button}
    onPress={onPress}
  >
    <View>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
