import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen110530Navigator from '../features/BlankScreen110530/navigator';
import BlankScreen010529Navigator from '../features/BlankScreen010529/navigator';
import BlankScreen010525Navigator from '../features/BlankScreen010525/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen110530: { screen: BlankScreen110530Navigator },
BlankScreen010529: { screen: BlankScreen010529Navigator },
BlankScreen010525: { screen: BlankScreen010525Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
