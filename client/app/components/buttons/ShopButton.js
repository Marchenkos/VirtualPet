import React from 'react';
import {View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    backgroundColor: '#ffff',
    overflow: 'hidden',
    padding: 3,
    borderColor: '#ffff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

export default function ShopButton(props) {
  return <View style={styles.container}>{props.children}</View>;
}
