import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import products from './data'; // Ensure your products array has numerical prices
import { useCart } from './CartContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Octicons';

const SearchScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = route.params?.filteredProducts || products;

  const showAlert = (item) => {
    Alert.alert(
      'Cart',
      `Add ${item.name} to cart?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => addToCart(item) },
      ],
      { cancelable: false }
    );
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.searchContainer}>
          <View style={styles.searchC}>
            <Image source={require('../assets/imgs/searchIcon.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Store"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <TouchableOpacity onPress={clearSearch}>
            <Icon name="x-circle-fill" size={16} color="#C5C5C5" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <MaterialIcons name="filter-list" size={22} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchedProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={[
              styles.productItem,
              {
                width: searchedProducts.length === 1 ? '50%' : '100%',
                flex: searchedProducts.length === 1 ? 0 : 1,
              },
            ]}
          >
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <View style={styles.row}>
                <Text style={styles.productPrice}>${parseFloat(item.price).toFixed(2)}</Text>
                <TouchableOpacity
                  style={styles.plusbtn}
                  onPress={() =>
                    showAlert({
                      id: item.id,
                      name: item.name,
                      price: parseFloat(item.price),
                      img: item.image,
                      details: item.description,
                    })
                  }
                >
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:15,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingRight:18,
    paddingLeft:18,
    marginBottom: 10,
    marginTop: 20,
},
searchIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
},
searchBox: {
    flex: 1,
    paddingVertical: 0,
    fontFamily: 'Gilroy-Medium',
    fontWeight: '600',
    fontSize:14,
},
  productItem: {
    margin: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 14,
    padding:15,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productName: {
    fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 16,
        marginBottom:10,
  },
  productPrice: {
    fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 18,
  },
  productDescription: {
    fontFamily: 'Gilroy-Medium',
        color: '#7C7C7C',
        fontSize: 14,
        marginBottom:30,
        height:30,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:5,
  },
  plusbtn :{
    backgroundColor:'#53B175',
    width:45,
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
},
btnText:{
    fontFamily: 'Gilroy-Medium',
    color:'white',
    fontSize: 32,
},
searchC:{
  flexDirection: 'row',
  alignItems: 'center',
},
});

export default SearchScreen;
