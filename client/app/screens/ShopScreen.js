import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';
import Orientation from 'react-native-orientation';
import Shop from '../components/Shop';
// import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBarContainer from '../containers/StatusBarContainer';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    position: 'absolute',
    resizeMode: 'cover',
  },
});

export default function ShopScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    console.log('a;a');
  });

  useEffect(() => {
    if (products.length < 1) {
      fetch('http://192.168.11.37:3000/supermarket/all')
        .then(response => response.json())
        .then(responseJson => {
          setProducts(responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [products]);

  return (
    <View>
     <StatusBarContainer />
      <Image
        source={require('../../img/shopbg.png')}
        style={styles.imageBackground}
      />
      <Shop products={products} />
    </View>
  );
}
