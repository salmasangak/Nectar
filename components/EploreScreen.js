import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ExploreScreen({ navigation }) {

  const handleFilter = (type) => {
    navigation.navigate('FilteredProductsScreen', { selectedType: type });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Find Products</Text>

        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/imgs/searchIcon.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBox}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            onPress={() => navigation.navigate('SearchScreen')}
          />
        </View>

        <View style={styles.rowcontainer}>
          <TouchableOpacity onPress={() => handleFilter('Dairy')}>
            <Image
              source={require('../assets/imgs/testE1.png')} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilter('Bakery')}>
            <Image
              source={require('../assets/imgs/bk2.png')} style={styles.img} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowcontainer}>
          <TouchableOpacity onPress={() => handleFilter('Fruits')}>
            <Image
              source={require('../assets/imgs/bk3.png')} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilter('Vegetables')}>
            <Image
              source={require('../assets/imgs/bk4.png')} style={styles.img} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowcontainer}>
          <TouchableOpacity onPress={() => handleFilter('Snacks')}>
            <Image
              source={require('../assets/imgs/bk5.png')} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilter('Beverages')}>
            <Image
              source={require('../assets/imgs/bk6.png')} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  contentContainer: {
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  headerText: {
    fontFamily: 'Gilroy-Bold',
    color: '#181725',
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBox: {
    flex: 1,
    height: 35,
    paddingVertical: 0,
    fontFamily: 'Gilroy-Medium',
    fontWeight: '600',
    fontSize: 14,
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  img: {
    width: 155,
    height: 168,
    margin: 5,
  },
});
