import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Product from './Product';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  contsiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 1.6,
    flexWrap: 'wrap',
  },
  footerImage: {
    position: 'absolute',
    width: 200,
    height: 100,
  },
});

export default function Shop({products}) {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.contsiner}>
        {products.map((item, index) => (
          <Product
            title={item.name}
            cost={item.cost}
            icon={item.img}
            energy={item.energy}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
}
