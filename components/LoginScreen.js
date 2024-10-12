import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/imgs/loginbk.png')}
        style={styles.background}
        resizeMode="cover"
      >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/imgs/mainLogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your email and password</Text>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.iconButton}>
            <Icon
                name={secureTextEntry ? 'eye-slash' : 'eye'}
                size={24}
                color="#A1A1A1"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonF}>
            <Text style={styles.buttonFText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.buttonFText}>Don’t have an account?</Text>
            <TouchableOpacity style={styles.buttonF} onPress={() => navigation.navigate('SignupNum')}>
              <Text style={styles.buttonTextG}>Signup</Text>
            </TouchableOpacity>
          </View>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 25,
  },
  logo: {
    width: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 10,
    fontFamily: 'Gilroy-Regular',
  },
  subtitle: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 30,
    fontFamily: 'Gilroy-Regular',
  },
  labelText: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 11,
  },
  passwordContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 11,
  },
  iconButton: {
   marginBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonF: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonFText: {
    color: '#181725',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    fontWeight: '600',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonTextG: {
    fontFamily: 'Gilroy-Regular',
    marginLeft: 5,
  },
});

export default LoginScreen;
