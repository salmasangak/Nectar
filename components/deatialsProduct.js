import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CounterComponent from './CounterComponent';

const DetailsProduct = ({ navigation }) => {
    const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);

    // Toggle function to handle showing/hiding the product details
    const toggleProductDetail = () => {
        setIsProductDetailVisible(!isProductDetailVisible);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ImageBackground
                source={require('../assets/imgs/appleDetails.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Entypo name="chevron-thin-left" size={22} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="upload" size={22} color="black" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.contentContainer}>
                <View style={styles.textandfav}>
                    <Text style={styles.textwithfav}>Natural Red Apple</Text>
                    <MaterialIcons name="favorite-outline" size={26} />
                </View>
                <Text style={styles.graytext}>1kg, Price</Text>
                <View style={styles.textandfav}>
                    <CounterComponent />
                    <Text style={styles.textwithfav}>$4.99</Text>
                </View>

                {/* Product Detail Section */}
                <View style={styles.ProductDetailCou}>
                    <TouchableOpacity style={styles.ProductDetail} onPress={toggleProductDetail}>
                        <Text style={styles.ProductDetailText}>Product Detail</Text>
                        <Entypo
                            name={isProductDetailVisible ? 'chevron-small-up' : 'chevron-small-right'}
                            color="#181725"
                            size={30}
                        />
                    </TouchableOpacity>
                    {isProductDetailVisible && (
                        <Text style={styles.ProductgreyText}>
                            Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.
                        </Text>
                    )}
                </View>

                <View style={styles.Nutritions}>
                    <Text style={styles.ProductDetailText}>Nutritions</Text>
                    <View style={styles.graytextcont}>
                        <Text style={styles.gtext}>100gr</Text>
                        <Entypo name="chevron-small-right" color="#181725" size={30} />
                    </View>
                </View>

                <View style={styles.Review}>
                    <Text style={styles.ProductDetailText}>Review</Text>
                    <View style={styles.graytextcont}>
                        <Image source={require('../assets/imgs/stars.png')} style={styles.itemImage} />
                        <Entypo name="chevron-small-right" color="#181725" size={30} />
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonlast}>
                    <Text style={styles.buttonTextlast}>Add To Basket</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'white',
        flexGrow: 1,
    },
    background: {
        height: 350,
        width: '100%',
    },
    contentContainer: {
        padding: 15,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        padding: 15,
    },
    textandfav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    textwithfav: {
        fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 24,
    },
    graytext: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        marginBottom: 25,
    },
    ProductDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProductDetailCou: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ccc',
        marginTop: 25,
    },
    ProductDetailText: {
        fontFamily: 'Gilroy-Medium',
        color: '#181725',
        fontSize: 18,
        marginTop: 15,
        marginBottom: 15,
    },
    ProductgreyText: {
        fontFamily: 'Gilroy-Regular',
        color: '#7C7C7C',
        fontSize: 14,
        marginBottom: 20,
        lineHeight: 20,
    },
    Nutritions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    graytextcont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gtext: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Gilroy-Regular',
        backgroundColor: '#EBEBEB',
        width: 45,
        height: 20,
        paddingLeft: 8,
        borderRadius: 6,
        fontSize: 12,
    },
    Review: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
    },
    buttonTextlast: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    buttonlast: {
        backgroundColor: '#53B175',
        width: '100%',
        height: 50,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DetailsProduct;
