import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useCart } from './CartContext';
import products from './data';


const FilteredProductsScreen = ({ route , navigation }) => {
  const { selectedType } = route.params;
  const { addToCart } = useCart();

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

  const filteredProducts = products.filter(product => product.type === selectedType);

  return (
    <View style={styles.container}>

      <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Entypo name="chevron-thin-left" size={22} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headText}> {selectedType}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
                    <MaterialIcons name="filter-list" size={22} color="black" />
                    </TouchableOpacity>
                </View>

      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productdescription}>{item.description}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity
                  style={styles.plusbtn}
                  onPress={() =>
                    showAlert({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      img: item.image,
                      details: item.description,
                    })
                  }
                >
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noProductsText}>No products available for {selectedType}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    marginTop:20,
},
headText:{
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    color:'#181725',
},
  productItem: {
    flex: 1,
    margin: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  productImage: {
    marginBottom: 8,
  },
  productName: {
    fontFamily: 'Gilroy-Bold',
    color: '#181725',
    fontSize: 14,
    marginBottom:10,
  },
  productPrice: {
    fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 18,
  },
  noProductsText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#7C7C7C',
  },
  productdescription:{
    fontFamily: 'Gilroy-Medium',
    color: '#7C7C7C',
    fontSize: 14,
    marginBottom:30,
  },
  productDetails:{
    height:100,
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
});

export default FilteredProductsScreen;
