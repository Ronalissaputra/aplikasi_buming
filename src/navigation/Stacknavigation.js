import { createStackNavigator } from "@react-navigation/stack";
import Notificationscreen from "../screens/notification/Notificationscreen";
import Tabnavigation from "./Tabnavigation";
import Authnavigation from "./Authnavigation";
import Anak from "../components/lists/Anak";
import Artikel from "../components/lists/Artikel";
import Ibuhamil from "../components/lists/Ibuhamil";
import Nifas from "../components/lists/Nifas";
import Status from "../components/lists/Status";
import Kehamilan from "../components/lists/Kehamilan";
// detail
import Detailanak from "../components/details/Detailanak";
import Detailnifas from "../components/details/Detailnifas";
import Detailkehamilan from "../components/details/Detailkehamilan";
import Detailartikel from "../components/details/Detailartikel";

const Stack = createStackNavigator();
const Stacknavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
      <Stack.Screen name="Notificationscreen" component={Notificationscreen} />
      <Stack.Screen name="Authnavigation" component={Authnavigation} />
      <Stack.Screen name="Ibuhamil" component={Ibuhamil} />
      <Stack.Screen name="Anak" component={Anak} />
      <Stack.Screen name="Nifas" component={Nifas} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="Artikel" component={Artikel} />
      <Stack.Screen name="Kehamilan" component={Kehamilan} />
      {/* detail */}
      <Stack.Screen name="Detailanak" component={Detailanak} />
      <Stack.Screen name="Detailnifas" component={Detailnifas} />
      <Stack.Screen name="Detailkehamilan" component={Detailkehamilan} />
      <Stack.Screen name="Detailartikel" component={Detailartikel} />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
