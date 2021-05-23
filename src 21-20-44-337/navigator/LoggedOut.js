import { createStackNavigator } from 'react-navigation'

import Login from '../components/Main/Login'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default LoggedOutNavigator
