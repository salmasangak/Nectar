import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import products from './data';
import Icon from 'react-native-vector-icons/Feather';

const FilterScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(products.map((item) => item.type))];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };


  const applyFilter = () => {
    const filteredData = products.filter((product) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.type);
      return matchesCategory;
    });

    navigation.navigate('SearchScreen', { filteredProducts: filteredData });
  };

  return (

    <ScrollView >
            <View style={styles.bar}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                <Icon name="x" size={26} color="#181725" />
                </TouchableOpacity>
          <Text style={styles.header}>Filters</Text>

</View>

<View style={styles.whitebk}>


<View style={styles.container}>

      <Text style={styles.title}>Categories</Text>
      {categories.map((category, index) => (
        <View style={styles.checkboxContainer} key={index}>
          <CheckBox
            value={selectedCategories.includes(category)}
            onValueChange={() => toggleCategory(category)}
            tintColors={{ true: '#53B175', false: '#D9D9D9' }}
          />
          <Text style={styles.checkboxLabel}>{category}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>

</View>
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    bar:{
        flexDirection: 'row',
        backgroundColor:'white',
        textAlign:'center',
        padding:20,
    },
    whitebk:{
        backgroundColor:'white',
    },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header:{
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    color:'#181725',
    marginLeft:110,
  },
  title: {
    fontWeight: '600',
    fontFamily: 'Gilroy-Medium',
    fontSize: 20,
    color:'#181725',
    marginBottom: 20,
    marginTop:20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontFamily: 'Gilroy-Regular',
    color:'#181725',
    marginLeft: 8,
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#53B175',
    width: '100%',
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy-Medium',
  },
});

export default FilterScreen;
