// LoginScreen
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { setFormUsernameAction, setFormPasswordAction, loginAction } from '../../redux/actions/userAction';
// import Banner from '../../components/login/Banner';

import styles from './styles';
import Button from '../../components/main/Button';

const mapStateToProps = ({ user }) => ({
  formUsername: user.formUsername,
  formPassword: user.formPassword,
  username: user.username,
});

const index = ({
  componentId, dispatch
}) => {
  const onLoginPress = () => {
    dispatch(loginAction(componentId));
  };
  const onMapPress = () => {
    Navigation.push(componentId, {
      component: {
        name: 'MapScreen'
      }
    });
  };
  const usernameTextChange = (text) => {
    dispatch(setFormUsernameAction(text));
  };
  const passwordTextChange = (text) => {
    dispatch(setFormPasswordAction(text));
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      {/* Form Username TextInput */}
      <View>
        <Text>Username</Text>
        <TextInput onChangeText={usernameTextChange} style={styles.Textbox} />
        <Text>Password</Text>
        <TextInput onChangeText={passwordTextChange} style={styles.Textbox} />
      </View>

      <Button title="Login" onPress={onLoginPress} />
      {/* Banner */}
      {/* <Banner /> */}
      {/* Button */}
      <Button title="Map" onPress={onMapPress} />
    </View>
  );
};
export default connect(mapStateToProps)(index);
