/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';
import HalfCircle from './HalfCircle';
import {CONSTANTS} from '../../constants';

const styles = StyleSheet.create({
  contsinerCircle: {
    width: CONSTANTS.RADIUS * 2,
    marginLeft: 10,
  },
  circle: {
    zIndex: 1,
  },
  halfOfCircle: {
    borderColor: '#96c7f7',
    borderWidth: 3,
    width: CONSTANTS.RADIUS * 2,
    height: CONSTANTS.RADIUS * 2,
    borderRadius: CONSTANTS.RADIUS,
  },
  overlay: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: CONSTANTS.RADIUS * 2 - CONSTANTS.STROKE_WIDTH * 2,
    height: CONSTANTS.RADIUS * 2 - CONSTANTS.STROKE_WIDTH * 2,
    borderRadius: CONSTANTS.RADIUS - CONSTANTS.STROKE_WIDTH,
    zIndex: 2,
  },
});

export default function ProgressCircle({bg, fg, progressValue, title}) {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);

  const [firstStartPosition, setFirstStartPosition] = useState(0);
  const [secondStartPosition, setSecondStartPosition] = useState(0);

  useEffect(() => {
    setStartPosition(endPosition);
    setEndPosition(progressValue);
  }, [progressValue]);

  useEffect(() => {
    if (startPosition > 50) {
      setFirstStartPosition(50);
      setSecondStartPosition(startPosition - 50);
    } else {
      setFirstStartPosition(startPosition);
      setSecondStartPosition(0);
    }
  }, [startPosition]);

  const [firstHalfAnimate] = useState(new Animated.Value(firstStartPosition));
  const [secondHalfAnimate] = useState(new Animated.Value(secondStartPosition));
  const [opacityAnimate] = useState(new Animated.Value(1));
  Animated.sequence([
    Animated.timing(firstHalfAnimate, {
      toValue: endPosition > 50 ? 50 : endPosition,
      duration: 3000,
      useNativeDriver: false,
    }),
    Animated.timing(opacityAnimate, {
      toValue: 0,
      duration: 1,
      useNativeDriver: false,
    }),
    Animated.timing(secondHalfAnimate, {
      toValue: endPosition > 50 ? endPosition - 50 : 0,
      duration: 3000,
      useNativeDriver: false,
    }),
  ]).start();
  const spin1 = firstHalfAnimate.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
  });

  const spin2 = secondHalfAnimate.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <>
      <View style={styles.contsinerCircle}>
        <View style={styles.circle}>
          <HalfCircle color={bg} />
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              opacity: endPosition <= 50 ? 1 : opacityAnimate,
              transform: [
                {translateY: CONSTANTS.RADIUS / 2},
                {rotate: spin1},
                {translateY: -CONSTANTS.RADIUS / 2},
              ],
            }}>
            <HalfCircle color={fg} />
          </Animated.View>
        </View>
        <View style={{transform: [{rotate: '180deg'}]}}>
          <HalfCircle color={bg} />
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              transform: [
                {translateY: CONSTANTS.RADIUS / 2},
                {rotate: spin2},
                {translateY: -CONSTANTS.RADIUS / 2},
              ],
            }}>
            <HalfCircle color={fg} />
          </Animated.View>
        </View>
        <View style={{...styles.overlay, backgroundColor: fg}}>
          <Text>{title}</Text>
        </View>
      </View>
    </>
  );
}
