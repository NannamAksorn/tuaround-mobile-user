// LoginScreen
import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

// import styles from './styles';
import Button from '../../components/main/Button';

const mapStateToProps = ({ user }) => ({
  formUsername: user.formUsername,
  formPassword: user.formPassword,
});

const index = ({ componentId, formUsername, formPassword }) => {
  const onLoginPress = () => {
    Navigation.push(componentId, {
      component: {
        name: 'HomeScreen'
      }
    });
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Text>{formUsername}</Text>
      <Text>{formPassword}</Text>
      <Button title="Login" onPress={onLoginPress} />
    </View>
  );
};

export default connect(mapStateToProps)(index);
