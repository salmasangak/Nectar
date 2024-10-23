import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import shopScreen from './ShopSceen';
import ExploreScreen from './EploreScreen';
import AccountScreen from './AccountScreen';
import CartScreen from './CartScreen';
import FavoriteScreen from './FavoriteScreen';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Shop') {
            return <Ionicons name="storefront-outline" size={size} color={color} />;
          } else if (route.name === 'Explore') {
            return <MaterialIcons name="manage-search" size={30} color={color} />;
          } else if (route.name === 'Cart') {
            return <FeatherIcons name="shopping-cart" size={size} color={color} />;
          } else if (route.name === 'Favourite') {
            return <MaterialIcons name="favorite-outline" size={size} color={color} />;
          } else if (route.name === 'Account') {
            return <MaterialIcons name="person-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#53B175',
        tabBarInactiveTintColor: '#181725',
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 30,
          height: 90,
        },
        tabBarLabelStyle: {
          fontFamily: 'Gilroy-Medium',
          fontSize: 12,
        },
      })}
    >
    <Tab.Screen name="Shop" options={{ headerShown: false }}
       component={shopScreen} />
      <Tab.Screen name="Explore" options={{ headerShown: false }}
       component={ExploreScreen} />
      <Tab.Screen name="Cart" options={{ headerShown: false }}
       component={CartScreen} />
      <Tab.Screen name="Favourite" options={{ headerShown: false }}
     component={FavoriteScreen} />
      <Tab.Screen name="Account" options={{ headerShown: false }}
       component={AccountScreen} />

    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
