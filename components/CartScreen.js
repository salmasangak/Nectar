import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity ,Modal,Alert} from 'react-native';
import { useCart } from './CartContext';
import Icon from 'react-native-vector-icons/Feather';
import CheckoutScreen from './CheckoutScreen';
import { BlurView } from '@react-native-community/blur';

const CartScreen = ({navigation}) => {
    const { cart, updateCartQuantity, removeFromCart, addToCart } = useCart();
    const [modalVisible, setModalVisible] = useState(false);


    const openBottomSheet = () => {
        if (calculateTotalPrice() > 0) {
            setModalVisible(true);
        } else {
            Alert.alert('Your cart is empty', 'Add items to proceed to checkout.');
        }
    };

    const closeBottomSheet = () => {
        setModalVisible(false);
    };
    const handleIncreaseQuantity = (item) => {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            updateCartQuantity(existingItem.name, existingItem.quantity + 1);
        } else {
            addToCart({ ...item, quantity: 1 });
        }
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            updateCartQuantity(item.name, item.quantity - 1);
        }
    };

    const handleRemoveFromCart = (name) => {
        removeFromCart(name);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };


    return (
        <View style={styles.contantcountainer}>
     <Text style={styles.header}>My Cart</Text>
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.img} style={styles.image} />
                        <View style={styles.details}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDetails}>{item.details}</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    onPress={() => handleDecreaseQuantity(item)}
                                    style={styles.quantityButton}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => handleIncreaseQuantity(item)}
                                    style={styles.quantityButton}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.colPrice}>
                            <TouchableOpacity onPress={() => handleRemoveFromCart(item.name)}>
                                <Icon name="x" size={24} color="#B3B3B3" />
                            </TouchableOpacity>
                            <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty!</Text>}
            />

        <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
                <Text style={styles.buttonText}>Go to Checkout</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>${calculateTotalPrice()}</Text>
                </View>
            </TouchableOpacity>
            <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={closeBottomSheet}
>
    <View style={styles.absolute}>
        <BlurView
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
        />
        <View style={styles.modalOverlay}>
            <CheckoutScreen onClose={closeBottomSheet} totalPrice={calculateTotalPrice()} navigation={navigation} />
        </View>
    </View>
</Modal>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contantcountainer:{
        flexGrow: 1,
        backgroundColor:'white',
    },
    container: {
        flex: 1,
        marginLeft:10,
        marginRight:10,
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
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        justifyContent: 'space-between',
    },
    image: {
        marginRight: 20,
        marginLeft:0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    details: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        color: '#181725',
        marginTop:20,
    },
    itemdetails:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        marginBottom: 10,
    },
    itemPrice: {
        fontSize: 16,
        color: '#181725',
        fontFamily: 'Gilroy-Medium',
        marginTop:30,
    },
    colprice:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    quantityButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        height:40,
        width:40,
        borderRadius:12,
        borderColor:'#F0F0F0',

    },
    quantityButtonText: {
        color: '#B3B3B3',
        fontSize: 26,
        fontFamily: 'Gilroy-Medium',
    },
    quantityButtonTextincre:{
        color: '#53B175',
        fontSize: 26,
        fontFamily: 'Gilroy-Medium',
    },
    quantityText: {
        fontSize: 18,
        fontFamily: 'Gilroy-Medium',
        color: '#181725',
        marginLeft:10,
        marginRight:10,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#181725',
        fontFamily: 'Gilroy-Medium',
    },
    button: {
        backgroundColor: '#53B175',
        width: '100%',
        height: 60,
        borderRadius: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        marginBottom:20,
        flexDirection: 'row',

      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Gilroy-Medium',
      },
      totalContainer:{
        backgroundColor:'#489E67',
        marginLeft:40,
        marginRight:25,
        borderRadius:5,
      },
      totalText:{
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        padding:5,
      },
      absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default CartScreen;
