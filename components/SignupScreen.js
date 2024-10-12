import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground , ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = ({ navigation }) => {
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

          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>

          <Text style={styles.labelText}>Username</Text>
          <TextInput
            style={styles.input}
          />

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

          <View style={styles.termsandprivcey}>
          <Text style={styles.ByText}>By continuing you agree to our </Text>
          <TouchableOpacity style={styles.buttonF}>
           <Text tyle={styles.terms}>Terms of Service</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.termsandprivcey}>
          <Text style={styles.ByText}>and </Text>
          <TouchableOpacity style={styles.buttonF}>
           <Text tyle={styles.terms}> Privacy Policy.</Text>
          </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Sing Up</Text>

          </TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.buttonFText}>Already have an account?</Text>
            <TouchableOpacity style={styles.buttonF} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonTextG}>Login</Text>
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
    paddingHorizontal: 10,
  },
  buttonF: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontFamily: 'Gilroy-Regular',

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
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-Regular',
  },
  termsandprivcey:{
    flexDirection: 'row',
  },
  ByText:{
    color: '#7C7C7C',
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    fontWeight: '600',
  },
  terms:{
    fontFamily: 'Gilroy-Regular',
    backgroundColor: '#53B175',
    fontSize: 14,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding:20,
  },
  buttonTextG: {
    fontFamily: 'Gilroy-Regular',
    marginLeft: 5,
    fontSize: 14,
  },
});

export default SignupScreen;
