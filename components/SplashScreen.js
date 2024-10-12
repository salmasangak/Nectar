import React, { useEffect, useRef } from 'react';
import { Image, Animated, StyleSheet, StatusBar, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const translateY = useRef(new Animated.Value(-200)).current;  // Start position off-screen

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 4000);

    return () => clearTimeout(timer);
  }, [translateY, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Image
          source={require('../assets/imgs/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      <StatusBar hidden={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
  },
});

export default SplashScreen;
