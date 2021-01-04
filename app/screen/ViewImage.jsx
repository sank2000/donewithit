import React from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import color from '../config/color';

export default function ViewImage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_container}>
        <View style={styles.top_container_left}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.top_container_right}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>

      <View style={styles.img_container}>
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
  img_container: {
    width: '90%',
    height: '90%',
    marginLeft: '5%',
    marginTop: '5%',
  },
  main_image: {
    width: '100%',
    height: '100%',
  },
});
