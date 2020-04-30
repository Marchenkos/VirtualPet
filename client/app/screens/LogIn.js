import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import CustomInput from '../components/Input';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 40,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'Courgette-Regular',
    paddingTop: 30,
    flex: 1,
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width / 3,
    marginTop: 15,
  },
  buttonTitle: {
    fontSize: 40,
    color: 'green',
    textAlign: 'center',
    fontFamily: 'Courgette-Regular',
  },
  inputElement: {
    fontSize: 20,
    padding: 15,
    color: 'gray',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    marginBottom: 20,
    width: Dimensions.get('window').width * 0.75,
  },
  checkedImage: {
    width: Dimensions.get('window').width / 3,
    height: 150,
    marginLeft: 20,
    opacity: 1,
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: 150,
    marginLeft: 20,
    opacity: 0.5,
  },
});

export default function Login({navigation, getUserCurrent}) {
  const [loginValue, setLoginValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const getUser = async () => {
    if (loginValue && confirmPasswordValue && passwordValue) {
      const value = await AsyncStorage.getItem(loginValue);
      const parseData = value ? JSON.parse(value) : null;

      if (
        value &&
        confirmPasswordValue === passwordValue &&
        parseData.password === passwordValue
      ) {
        getUserCurrent(parseData);
        navigation.navigate('MainPage');
        console.log('Success logIn');
      } else {
        console.log('No correct data');
      }
    } else {
      console.log('Fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Your login"
        name="username"
        secure={false}
        saveValue={setLoginValue}
      />
      <CustomInput
        label="Your password"
        name="password"
        secure={true}
        saveValue={setPasswordValue}
      />
      <CustomInput
        label="Confirm password"
        name="password"
        secure={true}
        saveValue={setConfirmPasswordValue}
      />
      <TouchableOpacity style={styles.button} onPress={getUser}>
        <Text style={styles.buttonTitle}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}
