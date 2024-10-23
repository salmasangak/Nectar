import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useFavorites } from './FavoritesContext';
import { useCart } from './CartContext';
import Entypo from 'react-native-vector-icons/Entypo';

const FavoriteScreen = () => {
    const { favorites, removeFromFavorites } = useFavorites();
    const { addToCart } = useCart();
    const handleAddAllToCart = () => {
        Alert.alert(
            'Add All to Cart',
            'Are you sure to add items to the cart?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        favorites.forEach(item => {
                            addToCart({ ...item, quantity: 1 });
                            removeFromFavorites(item.name);
                        });
                    }               },
                            ]
        );
    };

    return (
        <View style={styles.contantcountainer}>
            <Text style={styles.header}>Favorite</Text>
            <View style={styles.container}>
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image source={item.img} style={styles.itemImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDetailsText}>{item.details}</Text>
                            </View>
                            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                            <Entypo name="chevron-small-right" color="#181725" size={30} />
                        </View>
                    )}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddAllToCart}>
                    <Text style={styles.buttonText}>Add All To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contantcountainer: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        fontSize: 20,
        fontFamily: 'Gilroy-Bold',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        padding: 25,
        textAlign: 'center',
        color: '#181725',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom:25,
        paddingTop:10,
    },
    itemImage: {
        width: 90,
        borderRadius: 10,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
        marginBottom: 5,
        color: '#181725',
    },
    itemPrice: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        color: '#181725',
        marginBottom: 5,
    },
    itemDetailsText: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        color: '#7C7C7C',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#53B175',
        width: '100%',
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Gilroy-Medium',
    },
});

export default FavoriteScreen;
