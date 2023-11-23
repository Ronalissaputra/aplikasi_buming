import { createStackNavigator } from "@react-navigation/stack";
import Loginscreen from "../screens/auth/Loginscreen";
import Wellcomescreen from "../screens/auth/Wellcomescreen";
import Stacknavigation from "./Stacknavigation";
const Stack = createStackNavigator();

const Authnavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wellcomescreen" component={Wellcomescreen} />
      <Stack.Screen name="Loginscreen" component={Loginscreen} />
      <Stack.Screen name="Stacknavigation" component={Stacknavigation} />
    </Stack.Navigator>
  );
};

export default Authnavigation;
