import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground,ScrollView } from 'react-native';

const AccOrderScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/imgs/loginbk.png')}
        style={styles.background}
        resizeMode="cover"
      >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
            <Image
              source={require('../assets/imgs/accepted.png')}
              style={styles.Img}
              resizeMode="contain"
            />

          <Text style={styles.title}>Your Order has been accepted</Text>
          <Text style={styles.subtitle}>Your items has been placcd and is on it’s way to being processed</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Track Order</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.whitebuttonText}>Back to home</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img:{
    width:240,
    marginRight:15,
    marginTop:50,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 10,
    fontFamily: 'Gilroy-Medium',
    textAlign:'center',
    marginTop:30,
  },
  subtitle:{
    fontSize:14,
    fontWeight: '600',
    color: '#7C7C7C',
    marginBottom: 10,
    fontFamily: 'Gilroy-Medium',
    textAlign:'center',
    paddingLeft:35,
    paddingRight:35,
    lineHeight: 18,
    marginTop:10,
  },
  button: {
    backgroundColor: '#53B175',
    width: '100%',
    height: 55,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-Medium',
  },
  whitebuttonText: {
    color: '#181725',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Gilroy-Medium',
    padding:20,
    marginBottom:10,
  },
});

export default AccOrderScreen;
