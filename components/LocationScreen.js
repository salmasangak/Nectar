import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Entypo';

const LocationScreen = ({ navigation }) => {

  return (
    <ImageBackground
      source={require('../assets/imgs/loginbk.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('CodeScreen')}>
        <Icon2 name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.imgContainer}>
        <Image
              source={require('../assets/imgs/location.png')}
              style={styles.img}
              resizeMode="contain"
            />
        <Text style={styles.mainText}>Select Your Location</Text>
        <Text style={styles.labelText}>Swithch on your location to stay in tune with </Text>
        <Text style={styles.labelText}> what’s happening in your area </Text>
        </View>
        <Text style={styles.labelTextI}>Your Zone</Text>
          <View style={styles.Yourzone}>
          <TextInput style={styles.input}/>
          <Icon3 name="chevron-small-down" color="#7C7C7C" size={25} />
        </View>

        <Text style={styles.labelTextAR}>Your Area</Text>
          <View style={styles.Yourzone}>
          <TextInput style={styles.input} placeholder='Types of your area' />
          <Icon3 name="chevron-small-down" color="#7C7C7C" size={25} />
        </View>

        <View style={styles.Containerbutton}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}>
              <Icon name="chevron-thin-right" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',

  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 15,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  imgContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
   width:200,
  },
  mainText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 22,
    color: '#181725',
    marginTop: 20,
    marginBottom: 10,
  },

  input: {
    fontSize: 16,
    color: '#181725',
    fontFamily: 'Gilroy-Regular',

  },
  labelText: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelTextI:{
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    fontWeight: '700',
    marginTop:90,
  },
  buttonText: {
    fontFamily: 'Gilroy-Regular',
    color: '#53B175',
  },
  button: {
    backgroundColor: '#53B175',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Yourzone:{
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelTextAR:{
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    fontWeight: '700',
    marginTop:30,
  },
  Containerbutton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 70,
    marginBottom:20,
  },

});

export default LocationScreen;
