import React from "react";
import Homescreen from "../screens/home/Homescreen";
import Artikelscreen from "../screens/artikel/Artikelscreen";
import Profilescreen from "../screens/profile/Profilescreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Tabnavigation = () => {
  return (
    <>
      <Tab.Navigator
        barStyle="dark-content"
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            backgroundColor: "white",
            height: 50,
            padding: 0,
            borderTopColor: "#C0C0C0",
          },
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "#EC4899",
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Homescreen") {
              iconName = focused ? "home" : "home";
              size = focused ? size + 0 : size + 0;
            } else if (route.name === "Artikelscreen") {
              iconName = focused ? "book-open" : "book-open";
              size = focused ? size + 0 : size + 0;
            } else if (route.name === "Profilescreen") {
              iconName = focused ? "user" : "user";
              size = focused ? size + 0 : size + 0;
            }
            const iconStyle = focused ? {} : {};
            return (
              <Feather
                name={iconName}
                size={size}
                color={color}
                style={iconStyle}
              />
            );
          },
        })}
      >
        <>
          <Tab.Screen
            options={{ tabBarLabel: "Beranda" }}
            name="Homescreen"
            component={Homescreen}
          />
          <Tab.Screen
            options={{ tabBarLabel: "Artikel" }}
            name="Artikelscreen"
            component={Artikelscreen}
          />
          <Tab.Screen
            options={{ tabBarLabel: "Profil" }}
            name="Profilescreen"
            component={Profilescreen}
          />
        </>
      </Tab.Navigator>
    </>
  );
};

export default Tabnavigation;
