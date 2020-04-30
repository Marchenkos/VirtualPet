import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    padding: 10,
  },
  button: {
    borderColor: '#bfa102',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#a9e0ff',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#6c1d1d',
    fontSize: 13,
  },
  icon: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
});

export default function ShopButtonCoin({title, initStyle}) {
  return (
    <View style={{...styles.container, ...initStyle}}>
      <Image style={styles.icon} source={require('../../../img/coin.png')} />
      <Text style={styles.button}>${title}</Text>
    </View>
  );
}
