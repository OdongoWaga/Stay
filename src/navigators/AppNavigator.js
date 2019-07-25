import { reactStackNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import LoggedOut from '../screens/LoggedOut'
import LogIn from '../screens/LogIn'
import ForgotPassword from '../screens/ForgotPassword'
import TurnOnNotifications from '../screens/TurnOnNotifications'
import LoggedInTabNavigator from './LoggedInTabNavigator'

const LoggedOutStack = createStackNavigator({
    LoggedOut:{screen: LoggedOut},
    LogIn:{screen: LogIn},
    ForgotPassword:{screen: ForgotPassword}
});

export default createAppContainer(
    createSwitchNavigator({
        LoggedOut: LoggedOutStack,
        LoggedIn: {
            screen: LoggedInTabNavigator,
            navigatorOptions: {
                header: null, 
                gesturesEnabled: false
            }
        },
        TurnOnNotifications: {screen: TurnOnNotifications}
    }, {
        initialRouteName: 'LoggedOut'
    })
)