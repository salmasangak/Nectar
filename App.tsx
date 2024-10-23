import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartProvider } from './components/CartContext';
import { FavoritesProvider } from './components/FavoritesContext';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import LoginScreen from './components/LoginScreen';
import SignupNumScreen from './components/SignupNum';
import CodeScreen from './components/CodeScreen';
import LocationScreen from './components/LocationScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';
import ShopScreen from './components/ShopSceen';
import DetailsProduct from './components/deatialsProduct';
import ExploreScreen from './components/EploreScreen';
import CartScreen from './components/CartScreen';
import FavoriteScreen from './components/FavoriteScreen';
import AccOrderScreen from './components/AccOrderScreen';
import SearchScreen from './components/SearchScreen';
import EditProfileScreen from './components/EditProfileScreen';
import FilterScreen from './components/FilterScreen';
import FilteredProductsScreen from './components/FilteredProductsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const userName = await AsyncStorage.getItem('userName');
        const userEmail = await AsyncStorage.getItem('userEmail');

        if (userName && userEmail) {
          setInitialRoute('HomeScreen');
        } else {
          setInitialRoute('Splash');
        }
      } catch (error) {
        console.log('Error checking user data:', error);
        setInitialRoute('Splash');
      }
    };
    checkUserLogin();
  }, []);

  if (initialRoute === null) {
    return null;
  }

  return (
    <CartProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
              headerStyle: { backgroundColor: 'transparent' },
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignupNum" component={SignupNumScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CodeScreen" component={CodeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsProduct" component={DetailsProduct} options={{ headerShown: false }} />
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AccOrderScreen" component={AccOrderScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FilteredProductsScreen" component={FilteredProductsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
