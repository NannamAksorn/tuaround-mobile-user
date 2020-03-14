/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

export const linkTo = (componentId, to) => Navigation.push(componentId, {
  component: {
    name: to
  }
});
