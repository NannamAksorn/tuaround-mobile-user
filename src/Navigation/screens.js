import { Navigation } from 'react-native-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

export default function registerScreens() {
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
}
