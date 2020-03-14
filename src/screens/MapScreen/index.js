// MapScreen
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({
  formUsername: user.formUsername,
  formPassword: user.formPassword,
});

// Main
const index = ({ formPassword, formUsername }) => {
  console.log('hello');
  return (
    <View>
      <Text>MapScreen</Text>
      <Text>{formUsername}</Text>
      <Text>{formPassword}</Text>
    </View>
  );
};

export default connect(mapStateToProps)(index);
