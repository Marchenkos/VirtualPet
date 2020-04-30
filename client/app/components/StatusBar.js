import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CONSTANTS} from '../constants';

import ProgressCircle from './ProgressCircle/ProgressCircle';
import useInterval from './useInterval';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '59%',
    width: CONSTANTS.RADIUS * 2 - CONSTANTS.STROKE_WIDTH * 2,
    height: CONSTANTS.RADIUS * 2 - CONSTANTS.STROKE_WIDTH * 2,
    borderRadius: CONSTANTS.RADIUS - CONSTANTS.STROKE_WIDTH,
    backgroundColor: 'red',
    zIndex: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 20,
  },
});

export default function StatusBar({
  sleepLevel,
  foodLevel,
  wcLevel,
  enjoyLevel,
  changeFoodLevel,
  changeSleepLevel,
  changeWCLevel,
  changeEnjoyLevel,
}) {
  useInterval(() => {
    changeFoodLevel(10, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeEnjoyLevel(5, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeSleepLevel(5, CONSTANTS.ACTION_OPERATIONS.decrease);
    changeWCLevel(10, CONSTANTS.ACTION_OPERATIONS.decrease);
  }, 20000);

  return (
    <View style={styles.headerContainer}>
      <ProgressCircle
        fg="#ffffff"
        bg="#68b3fd"
        progressValue={foodLevel}
        title="eat"
      />
      <ProgressCircle
        fg="#ffffff"
        bg="#68b3fd"
        progressValue={wcLevel}
        title="wc"
      />
      <ProgressCircle
        fg="#ffffff"
        bg="#68b3fd"
        progressValue={sleepLevel}
        title="sl"
      />
      <ProgressCircle
        fg="#ffffff"
        bg="#68b3fd"
        progressValue={enjoyLevel}
        title="enj"
      />
    </View>
  );
}
