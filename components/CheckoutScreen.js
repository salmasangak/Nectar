import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';



const checkoutScreen = ({ onClose, totalPrice , navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.title}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
                <Icon name="x" size={24} color="#181725" />
                </TouchableOpacity>
        </View>
        <View style={styles.contantcontainer}>

        <View style={styles.Delivery}>
                    <Text style={styles.DeliveryText}>Delivery</Text>
                    <View style={styles.arrowtextcont}>
                        <Text style={styles.btext}>Select Method</Text>
                        <Entypo name="chevron-small-right" color="#181725" size={30} />
                    </View>
                </View>

                <View style={styles.Delivery}>
                    <Text style={styles.DeliveryText}>Pament</Text>
                    <View style={styles.arrowtextcont}>
                    <Image source={require('../assets/imgs/Pament.png')} style={styles.itemImage} />
                        <Entypo name="chevron-small-right" color="#181725" size={30} />
                    </View>
                </View>

                <View style={styles.Delivery}>
                    <Text style={styles.DeliveryText}>Promo Code</Text>
                    <View style={styles.arrowtextcont}>
                        <Text style={styles.btext}>Pick discount</Text>
                        <Entypo name="chevron-small-right" color="#181725" size={30} />
                    </View>
                </View>

                <View style={styles.Delivery}>
                    <Text style={styles.DeliveryText}>Total Cost</Text>
                    <View style={styles.arrowtextcont}>
                        <Text style={styles.btext}>${totalPrice}</Text>
                        <Entypo name="chevron-small-right" color="#181725" size={30} />
                    </View>
                </View>

                <Text style={styles.sgreytext}>By placing an order you agree to our</Text>
                <View style={styles.termsand}>
                        <Text style={styles.sbtext}>Terms</Text>
                        <Text style={styles.andtext}> And </Text>
                        <Text style={styles.sbtext}>Conditions</Text>
                    </View>

            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('AccOrderScreen')} >
                <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F3F2',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width:'100%',
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2B2',
        justifyContent: 'space-between',
        padding:20,
    },
    contantcontainer:{
        marginLeft:15,
        marginRight:20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Gilroy-Bold',
        marginBottom: 10,
        color: '#181725',
    },

    Button: {
        backgroundColor: '#53B175',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom:20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
    },
    Delivery: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2B2',
        paddingBottom:20,
        paddingTop:20,
        },
    arrowtextcont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DeliveryText: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 18,
        color:'#7C7C7C',
    },
    btext: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        color: '#181725',
    },
    itemImage:{
        height:15,
    },
    sgreytext:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        color:'#7C7C7C',
        paddingTop:20,
    },
    termsand:{
        flexDirection: 'row',
        paddingBottom:20,
    },
    sbtext:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        color:'#181725',
    },
    andtext:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        color:'#7C7C7C',
    },
});

export default checkoutScreen;
