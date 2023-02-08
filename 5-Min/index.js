import Signup from './Screens/Signup';
import Home from './Screens/Home';
import { AppRegistry } from 'react-native';

const isLoggedIn = false;

AppRegistry.registerComponent('MyApp', () => isLoggedIn ? Home : Signup);
