import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import color from '../config/color';

export default function ViewImage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.top_container_left}></View>
        <View style={styles.top_container_right}></View>
      </View>

      <View>
        <Image
          style={styles.main_image}
          source={require('../assets/chair.jpg')}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '6%',
    backgroundColor: color.black,
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  top_container_left: {
    width: 50,
    height: 50,
    backgroundColor: color.primary,
  },
  top_container_right: {
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
  },
  main_image: {
    width: '90%',
    height: '90%',
    marginLeft: '5%',
    marginTop: '5%',
  },
});
