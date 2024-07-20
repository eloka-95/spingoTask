import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import OnboardImg from '../../assets/images/onboardImg.png'
import numberImg from '../../assets/images/01.png'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View>
          <Image style={styles.image1} source={OnboardImg} />
        </View>

        <View style={styles.line}>
          <View style={styles.blueLine}></View>
        </View>
      </View>

      <View style={styles.down}>
        <View style={styles.textContainer}>
          <Image source={numberImg} />
          <Text style={styles.tx1}>
            Welcome to <Text style={styles.highlight}>SPINGO!</Text> Your ultimate Business Companion.
          </Text>
        </View>
        <Text style={styles.tx2}>Streamline your business operations and maximize efficiency with our all-in-one platform.</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  
  },

top:{
  width:'100%',
},

  image1: {
    width: '100%',
    resizeMode: 'cover',
  },

  line: {
    width: scale(306),
    height: scale(8),
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
    left: scale(30),
    transform: [{ translateY: scale(-20) }],
  },

  blueLine: {
    position: 'absolute',
    backgroundColor: '#00A6FB',
    width: scale(135),
    height: scale(8),
    borderRadius: 10,
  },

  down: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: verticalScale(420),
    left: scale(0),
    padding: scale(10),
  },

  tx1: {
    width: scale(150),
    height: verticalScale(90),
    marginLeft: scale(50),
    lineHeight: 25,
    fontSize: 16,
    fontWeight: '800',
  },
  tx2: {
    fontSize: 14,
    fontWeight: '400',
  },

  textContainer: {
    flexDirection: 'row'
  },

  btnContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#00A6FB',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#00A6FB',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,  // Add margin to separate buttons
    paddingHorizontal: 20, // Add horizontal padding for larger touch area
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  button2: {
    backgroundColor: '#fff',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#00A6FB',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonText2: {
    color: '#00A6FB',
    fontSize: 16,
    textAlign: 'center',
  },

  highlight: {
    color: '#00A6FB', 
  },
});