import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CONSTANTS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: CONSTANTS.RADIUS * 2,
    height: CONSTANTS.RADIUS,
    overflow: 'hidden',
  },
  halfOfCircle: {
    borderColor: '#96c7f7',
    borderWidth: 3,
    width: CONSTANTS.RADIUS * 2,
    height: CONSTANTS.RADIUS * 2,
    borderRadius: CONSTANTS.RADIUS,
  },
});

export default function HalfCircle({color}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.halfOfCircle,
          backgroundColor: color,
        }}
      />
    </View>
  );
}
