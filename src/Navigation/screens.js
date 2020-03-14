import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

export default function registerScreens() {
  Navigation.registerComponentWithRedux('LoginScreen', () => LoginScreen, Provider, store);
  Navigation.registerComponentWithRedux('HomeScreen', () => HomeScreen, Provider, store);
  Navigation.registerComponentWithRedux('MapScreen', () => MapScreen, Provider, store);
}
