import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import ShopButtonCoin from './buttons/ShopButtonCoin';
import ShopButton from './buttons/ShopButton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 100,
    marginRight: 10,
    marginTop: 30,
    height: Dimensions.get('window').height / 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    marginBottom: 10,
  },
  image: {
    width: 40,
    marginTop: 10,
    marginBottom: 5,
    height: 40,
  },
  signature: {
    color: '#5abef6',
    fontSize: 12,
  },
});

export default function Product({title, cost, energy, icon}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ShopButton>
          <Icon name="heart" type="evilicon" color="#5abef6" />
          <Text style={styles.signature}>+{energy}</Text>
        </ShopButton>
      </View>
      <Image
        source={{uri: `data:${icon.contentType};base64,${icon.data}`}}
        style={styles.image}
      />
      <ShopButtonCoin title={cost} initStyle={{width: 60, height: 40}} />
    </View>
  );
}
