import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

registerScreens();

export default () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [{
            component: {
              name: 'LoginScreen',
            },
          }]
        }
      },
    });
  });
};
