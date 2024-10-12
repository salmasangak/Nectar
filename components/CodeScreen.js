import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Entypo';

const CodeInputScreen = ({ navigation }) => {
  const [code, setCode] = useState(['','','','']);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    setCode(newCode);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <ImageBackground
        source={require('../assets/imgs/loginbk.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignupNum')}>
              <Icon2 name="chevron-thin-left" size={22} color="black" />
            </TouchableOpacity>

            <Text style={styles.mainText}>Enter your 4-digit code</Text>
            <Text style={styles.labelText}>Code</Text>

            <View style={styles.codeBox}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  style={styles.input}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  placeholder="_"
                  placeholderTextColor="#181725"
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
            </View>

            <View style={styles.twobutton}>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Resend Code</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LocationScreen')}>
                <Icon name="chevron-thin-right" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
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
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 15,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  mainText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 22,
    color: '#181725',
    marginTop: 45,
  },
  labelText: {
    fontSize: 16,
    fontFamily: 'Gilroy-Regular',
    marginTop: 30,
    fontWeight: '600',
  },
  codeBox: {
    flexDirection: 'row',
    width:'100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    fontSize: 18,
    color: '#181725',
    marginRight:-14,
  },
  twobutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 260,
  },
  buttonText: {
    fontFamily: 'Gilroy-Regular',
    color: '#53B175',
    fontSize:16,
  },
  button: {
    backgroundColor: '#53B175',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CodeInputScreen;
