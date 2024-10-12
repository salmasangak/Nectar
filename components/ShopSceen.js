import React from 'react';
import { ScrollView, View, StyleSheet,Image, Text , TextInput ,TouchableOpacity ,ImageBackground} from 'react-native';

export default function ShopScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
            <Image
              source={require('../assets/imgs/mainLogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          <View style={styles.loctionContainer}>
          <Image
              source={require('../assets/imgs/loactionicon.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.textLS}> Dhaka, Banassre</Text>
            </View>

            <View style={styles.searchContainer}>
                    <Image
                        source={require('../assets/imgs/searchIcon.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchBox}
                        placeholder="Search Store"
                        placeholderTextColor="#7C7C7C"
                    />
                </View>

                <Image source={require('../assets/imgs/banner.png')} style={styles.banner}
              resizeMode="contain" />

               <View style={styles.tmaincontainer}>
                <Text style={styles.tbig}>Exclusive Offer</Text>
                <TouchableOpacity>
                <Text style={styles.tsmall}> See all</Text>
                </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    style={styles.horizontalScrollContainer}
                    contentContainerStyle={{ paddingRight: 15 }}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/apple.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Organic Bananas</Text>
                        <Text style={styles.item2Text}>7PCS, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContainer} 
                    onPress={() => navigation.navigate('detailsProduct')}>
                        <Image
                            source={require('../assets/imgs/apple.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Red Apple</Text>
                        <Text style={styles.item2Text}>1kg, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/apple.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Organic Bananas</Text>
                        <Text style={styles.item2Text}>7PCS, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/apple.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Organic Bananas</Text>
                        <Text style={styles.item2Text}>7PCS, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </ScrollView>


                <View style={styles.tmaincontainer}>
                <Text style={styles.tbig}>Best Selling</Text>
                <TouchableOpacity>
                <Text style={styles.tsmall}> See all</Text>
                </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    style={styles.horizontalScrollContainer}
                    contentContainerStyle={{ paddingRight: 15 }}
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/flfl.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Organic Bananas</Text>
                        <Text style={styles.item2Text}>7PCS, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/pngfuel.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Red Apple</Text>
                        <Text style={styles.item2Text}>1kg, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <View style={styles.tmaincontainer}>
                <Text style={styles.tbig}>Groceries</Text>
                <TouchableOpacity>
                <Text style={styles.tsmall}> See all</Text>
                </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal={true}
                    style={styles.horizontalScrollContainer}
                    showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={styles.PulsesContainer}>
                    <ImageBackground
                    source={require('../assets/imgs/Pulsesbk.png')}
                    style={styles.background}
                    resizeMode="cover"  >
                        <View style={styles.buttonandt}>
                        <Image
                            source={require('../assets/imgs/Pulses.png')} />

                          <Text style={styles.GroceriesText}>Pulses</Text>
                        </View>
                        </ImageBackground>

                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground
                    source={require('../assets/imgs/Ricebk.png')}
                    style={styles.background}
                    resizeMode="cover"  >
                        <View style={styles.buttonandt}>
                        <Image
                            source={require('../assets/imgs/Rice.png')}/>
                          <Text style={styles.GroceriesText}>Rice</Text>
                        </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </ScrollView>



                <ScrollView
                    horizontal={true}
                    style={styles.horizontalScrollContainer}
                    contentContainerStyle={{ paddingRight: 15 }}
                    showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/BeefBone.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Beef Bone</Text>
                        <Text style={styles.item2Text}>1kg, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemContainer}>
                        <Image
                            source={require('../assets/imgs/BroilerChicken.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.item1Text}>Broiler Chicken</Text>
                        <Text style={styles.item2Text}>1kg, Priceg</Text>
                        <View style={styles.buttonandt}>
                          <Text style={styles.priceText}>$4.99</Text>
                          <TouchableOpacity style={styles.plusbtn}>
                            <Text style={styles.btnText}>+</Text>
                          </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </ScrollView>



          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor:'white',
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    contentContainer: {
        alignItems: 'center',
        marginRight:15,
        marginLeft:15,

    },
    logo:{
        width:28,
        alignItems: 'center',

    },
    loctionContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLS:{
        fontFamily: 'Gilroy-Medium',
        color:'#4C4F4D',
        fontWeight: '600',
        fontSize:18,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F2F3F2',
        borderRadius: 15,
        padding:10,
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
        fontSize:14,
    },
    banner:{
        width:330,
    },
    tmaincontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop:30,
    },
    tbig: {
        fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 22,
    },
    tsmall:{
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        color:'#53B175',
    },
    horizontalScrollContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    itemContainer: {
        marginRight: 15,
        borderColor:'#ccc',
        borderWidth:1,
        borderRadius:14,
        padding:20,
        width: 180,
        },
    itemImage: {
        marginBottom: 25,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        },
    item1Text: {
        fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 16,
        marginBottom:10,

    },
    item2Text: {
        fontFamily: 'Gilroy-Medium',
        color: '#7C7C7C',
        fontSize: 14,
        marginBottom:30,
    },
    buttonandt:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

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
    priceText:{
        fontFamily: 'Gilroy-Bold',
        color: '#181725',
        fontSize: 18,
    },

    GroceriesText:{
        fontFamily: 'Gilroy-Medium',
        color: '#3E423F',
        fontSize: 18,
        marginLeft:5,
        fontWeight: '600',
    },
    background:{
        width:240,
        height:110,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding:20,
        marginRight:20,
        borderRadius:12,
    },

});
