import React, { useState, useEffect } from 'react';
import { View, TextInput,Image, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';


const EditProfileScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        const email = await AsyncStorage.getItem('userEmail');

        if (name) setUserName(name);
        if (email) setUserEmail(email);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('userEmail', userEmail);
      Alert.alert('Success', 'Profile updated successfully!');
      navigation.goBack();
    } catch (error) {
      console.log('Error saving data:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };

  return (
    <View style={styles.container}>

     <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}  style={styles.icon}>
     <Entypo name="chevron-thin-left" size={22} color="black" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
              <Image
                source={require('../assets/imgs/mainLogo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

      <Text style={styles.label}>Edit Username</Text>
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
        placeholder="Enter new username"
      />

      <Text style={styles.label}>Edit Email</Text>
      <TextInput
        style={styles.input}
        value={userEmail}
        onChangeText={setUserEmail}
        placeholder="Enter new email"
        keyboardType="email-address"
      />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  icon:{
    marginBottom:30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 40,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#53B175',
    width: '100%',
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-Regular',
  },
});

export default EditProfileScreen;
