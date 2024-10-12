import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import shopScreen from './ShopSceen';


function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>hiiii</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'ShopScreen') {
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
    <Tab.Screen name="ShopScreen" options={{ headerShown: false }}
       component={shopScreen} />
      <Tab.Screen name="Explore" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={ProfileScreen} />
      <Tab.Screen name="Favourite" component={ProfileScreen} />
      <Tab.Screen name="Account" component={ProfileScreen} />
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
  