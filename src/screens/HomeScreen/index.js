// HomeScreen
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({
  formUsername: user.formUsername,
  formPassword: user.formPassword,
});

const index = ({ formPassword, formUsername }) => (
  <View>
    <Text>HomeScreen</Text>
    <Text>{formUsername}</Text>
    <Text>{formPassword}</Text>
  </View>
);

export default connect(mapStateToProps)(index);
