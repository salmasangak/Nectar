import React from 'react';
import { ImageBackground, View, StyleSheet, Image, ScrollView, TextInput ,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


const SignupNumScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/imgs/loginbk.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Image
                        source={require('../assets/imgs/testsing.png')}
                        style={styles.image}
                    />
                    <View style={styles.contentContainer}>
                        <Text style={styles.mainText}>Get your groceries</Text>
                        <Text style={styles.mainText}>with nectar</Text>

                        <View style={styles.inputTContainer}>
                        <Image
                                source={require('../assets/imgs/simLogo.png')}
                                style={styles.icon}
                            />
                        <Text style={styles.constantText}>+880</Text>
                        <TextInput style={styles.input}/>
                        </View>
                        <View style={styles.Icong}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CodeScreen')}>
                    <Icon name="chevron-forward" size={24} color="#FFFFFF" />
                    </TouchableOpacity >
                    </View>
                    <View style={styles.cenrtC}>
                    <Text style={styles.textG}>Or connect with social media</Text>
                    <TouchableOpacity style={styles.Goobutton}>
                    <Image
                    source={require('../assets/imgs/Glgo.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.facbutton}>
                    <Image
                    source={require('../assets/imgs/flogo.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                    </TouchableOpacity>

                    </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    background: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    contentContainer: {
        marginRight: 30,
        marginLeft: 30,
    },
    mainText: {
        fontSize: 24,
        fontFamily: 'Gilroy-Bold',
    },
    inputTContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 10,
    },
    constantText: {
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        marginLeft:5,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        fontFamily: 'Gilroy-Regular',
    },
    button:{
        backgroundColor: '#53B175',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icong:{
        alignItems: 'flex-end',
        marginBottom:20,
        marginTop:20,
    },
    textG :{
        alignItems: 'center',
        fontFamily: 'Gilroy-Medium',
        color:'#828282',
        fontSize:14,
        },
    cenrtC:{
        alignItems: 'center',
    },
    Goobutton:{
      flexDirection: 'row',
      backgroundColor:'#5383EC',
      width: '100%',
      height:60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:12,
      marginTop:20,
      marginBottom:20,
    },
    buttonText:{
        color:'white',
        marginLeft:20,
        fontFamily: 'Gilroy-Medium',
        fontSize:16,
    },
    facbutton:{
        flexDirection: 'row',
        backgroundColor:'#4A66AC',
        width: '100%',
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:12,
        marginBottom:40,
    }

});

export default SignupNumScreen;
