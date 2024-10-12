import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, TextProps } from 'react-native';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import LoginScreen from './components/LoginScreen';
import SignupNumScreen from './components/SignupNum';
import CodeScreen from './components/CodeScreen';
import LocationScreen from './components/LocationScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';
import ShopScreen from './components/ShopSceen';
import detailsProduct from './components/deatialsProduct';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: { backgroundColor: 'transparent'},
          headerShadowVisible: false, 
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupNum"
          component={SignupNumScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="ShopScreen"
          component={ShopScreen}
          options={{
            headerShown: false,
          }}
        />
     <Stack.Screen
          name="detailsProduct"
          component={detailsProduct}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Gilroy-Regular',
  },
});

export const GlobalText: React.FC<TextProps> = ({ style, ...props }) => (
  <Text style={[styles.text, style]} {...props} />
);

export default App;
