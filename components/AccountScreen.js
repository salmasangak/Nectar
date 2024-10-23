import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AccountScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        try {
          const name = await AsyncStorage.getItem('userName');
          const email = await AsyncStorage.getItem('userEmail');

          if (name && email) {
            setUserName(name);
            setUserEmail(email);
          } else {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              })
            );
          }
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      fetchUserData();
    }, [navigation])
  );

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userEmail');
  
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      );
    } catch (error) {
      console.log('Error clearing data:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.row}>
          <Image source={require('../assets/imgs/profile.png')} style={styles.img} />
          <View style={styles.col}>
            <View style={styles.row2}>
              <Text style={styles.textname}>{userName || 'User Name'}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                <SimpleLineIcons name="pencil" size={14} color="#53B175" />
              </TouchableOpacity>
            </View>
            <Text style={styles.textemail}>{userEmail || 'Email'}</Text>
          </View>
        </View>

        <View style={styles.rowwithline}>
          <View style={styles.row2}>
            <Feather name="shopping-bag" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>Orders</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <AntDesign name="idcard" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>My Details</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <SimpleLineIcons name="location-pin" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>Delivery Address</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <Entypo name="credit-card" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>Payment Methods</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <Entypo name="credit-card" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>Promo Code</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <Ionicons name="notifications-outline" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>Notifications</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <Feather name="help-circle" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>Help</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <View style={styles.rowwithbottomline}>
          <View style={styles.row2}>
            <AntDesign name="exclamationcircleo" size={20} color="black" style={styles.icon} />
            <Text style={styles.text}>About</Text>
          </View>
          <Entypo name="chevron-small-right" color="#181725" size={30} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <View style={styles.row3}>
            <Feather name="log-out" size={20} color="#53B175" style={styles.iconlogout} />
            <Text style={styles.buttonText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  textname: {
    fontFamily: 'Gilroy-Bold',
    color: '#181725',
    fontSize: 18,
    marginRight: 10,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  textemail: {
    fontFamily: 'Gilroy-Regular',
    color: '#7C7C7C',
    fontSize: 16,
  },
  img: {
    marginRight: 15,
    marginLeft: 20,
  },
  rowwithline: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#F2F3F2',
    marginTop: 25,
    padding: 15,
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 12,
    marginRight: 15,
  },
  rowwithbottomline: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#F2F3F2',
    padding: 15,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Gilroy-Medium',
    color: '#181725',
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#F2F3F2',
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: '#53B175',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-Medium',
  },
  iconlogout: {
    marginLeft: 30,
    marginRight: 80,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default AccountScreen;
