
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Splash from './components/Splash';
import Login from './components/Login';
import Chat from './components/Chat';

const Routes = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: false
        }
    },
     Chat: {
        screen: Chat,
        navigationOptions: {
            header: false
        }
    },

});



export default createAppContainer(Routes);