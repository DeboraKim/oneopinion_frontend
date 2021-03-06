import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DrawerNavigation from "./DrawerNavigation";
import SurveyNavigation from "./SurveyNavigation";

const TestMain = createStackNavigator(
  {
    SurveyNavigation,
    DrawerNavigation
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(TestMain);
