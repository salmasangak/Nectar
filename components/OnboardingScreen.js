import React from 'react';
import { ImageBackground, View, StyleSheet, StatusBar, Image, Text, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/imgs/bkonboarding.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Image
            source={require('../assets/imgs/whitelogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.text}>to our store</Text>
          <Text style={styles.texts}>Get your groceries in as fast as one hour</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    fontSize: 44,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Gilroy-Regular',
  },
  logo: {
    width: 42,
  },
  texts: {
    fontSize: 16,
    color: '#FCFCFCB2',
    textAlign: 'center',
    fontFamily: 'Gilroy-Regular',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#53B175',
    width: 300,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Gilroy-Regular',
  },
});

export default OnboardingScreen;
