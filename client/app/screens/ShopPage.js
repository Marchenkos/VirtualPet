import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Image, Dimensions, View} from 'react-native';
import Orientation from 'react-native-orientation';
import Shop from '../components/Shop';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {CONSTANTS} from '../../constants';
import HeaderState from '../components/HeaderState';

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

export default function ShopPage({
  currentUser,
  sleepLevel,
  foodLevel,
  wcLevel,
  enjoyLevel,
  changeFoodLevel,
  changeSleepLevel,
  changeWCLevel,
  changeEnjoyLevel,
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    console.log('a;a');
  });

  const changeDesires = useCallback(() => {
    changeFoodLevel(10, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeEnjoyLevel(5, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeSleepLevel(5, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeWCLevel(10, CONSTANTS.ACTION_OPERATIONS.decrease);
  }, [changeEnjoyLevel, changeFoodLevel, changeSleepLevel, changeWCLevel]);

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
  });

  return (
    <View>
      <HeaderState
        sleepLevel={sleepLevel}
        foodLevel={foodLevel}
        wcLevel={wcLevel}
        enjoyLevel={enjoyLevel}
        changeDesires={changeDesires}
      />
      <Image
        source={require('../../img/shopbg.png')}
        style={styles.imageBackground}
      />
      <Shop products={products} />
    </View>
  );
}
