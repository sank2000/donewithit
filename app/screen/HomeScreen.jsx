import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import color from '../config/color';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.image}
    >
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>sell that you don't want</Text>
      </View>

      <View>
        <View style={styles.register_box}></View>
        <View style={styles.login_box}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logo_container: {
    flex: 1,
    top: 70,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  register_box: {
    height: 70,
    backgroundColor: color.primary,
    width: '100%',
  },
  login_box: {
    height: 70,
    backgroundColor: color.secondary,
    width: '100%',
  },
});
