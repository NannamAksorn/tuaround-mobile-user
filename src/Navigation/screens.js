import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

export default function registerScreens() {
  Navigation.registerComponentWithRedux('LoginScreen', () => LoginScreen, Provider, store);
  Navigation.registerComponentWithRedux('HomeScreen', () => HomeScreen, Provider, store);
}
