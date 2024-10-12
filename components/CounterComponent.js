import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CounterComponent = () => {
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.button} onPress={decrementCount}>
                <Text style={styles.geryText}>-</Text>
            </TouchableOpacity>
            <View style={styles.countTextcon}>
            <Text style={styles.countText}>{count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={incrementCount}>
                <Text style={styles.greenText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greenText: {
        Color: '#53B175',
        fontSize: 35,

    },
    geryText: {
        color: '#B3B3B3',
        fontSize: 40,
        fontWeight: 'bold',
    },
    countText: {
        fontSize: 18,
        fontFamily: 'Gilroy-Medium',
        color: '#181725',

    },
    countTextcon:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        height:40,
        width:40,
        borderRadius:12,
        borderColor:"#ccc",
        marginLeft:10,
        marginRight:10,
    }
});

export default CounterComponent;
