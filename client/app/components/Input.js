/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {StyleSheet, View, Dimensions} from 'react-native';
import {constraints} from './ValidationsRules';
import validate from 'validate.js';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 40,
    backgroundColor: '#fff',
  },
  inputElement: {
    fontSize: 20,
    padding: 5,
    color: 'gray',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    width: Dimensions.get('window').width * 0.75,
  },
});

export default function CustomInput({label, secure, name, saveValue}) {
  const [inputValue, setInputvalue] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    if (inputValue) {
      const error = validate.single(inputValue, constraints[name]);
      setInputError(error ? error[0] : '');
    }
  }, [inputValue]);

  const onChangeInput = useCallback(value => {
    setInputvalue(value);
    saveValue(value);
  }, []);

  return (
    <View>
      <TextInput
        label={label}
        onChangeText={text => onChangeInput(text)}
        secureTextEntry={secure}
        style={styles.inputElement}
        theme={{colors: {primary: 'green'}}}
      />
      <HelperText type="error" visible={inputError}>
        {inputError}
      </HelperText>
    </View>
  );
}
