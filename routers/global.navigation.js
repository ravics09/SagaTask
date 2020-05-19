import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../containers/home';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
        }
    }
}, {
        initialRouteName: 'Home'
    })

const GlobalNavigator = createAppContainer(AppNavigator);

export default GlobalNavigator;