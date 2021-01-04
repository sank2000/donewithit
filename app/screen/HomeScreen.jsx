import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      blurRadius={7}
      style={styles.image}
    >
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>sell that you don't want</Text>
      </View>

      <View style={styles.button_container}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
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
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
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
  button_container: {
    padding: 20,
    width: '100%',
  },
});
