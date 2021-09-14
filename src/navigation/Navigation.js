import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
