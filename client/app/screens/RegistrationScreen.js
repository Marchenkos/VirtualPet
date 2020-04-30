import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Chip} from 'react-native-paper';
import CustomInput from '../components/Input';
import AsyncStorage from '@react-native-community/async-storage';
import {CONSTANTS} from '../constants';

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
    marginTop: 20,
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
    padding: 5,
    color: 'gray',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    width: Dimensions.get('window').width * 0.75,
  },
  checkedImage: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    marginLeft: 15,
    opacity: 1,
  },
  image: {
    width: Dimensions.get('window').width / 4.5,
    height: 100,
    marginLeft: 35,
  },
  chipStyle: {
    backgroundColor: 'white',
  },
});

export default function RegistrationScreen({navigation}) {
  const [genderValue, setGenderValue] = useState(null);
  const [loginValue, setLoginValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const saveUser = async () => {
    if (loginValue && emailValue && passwordValue && genderValue) {
      const value = await AsyncStorage.getItem(loginValue);

      if (value) {
        console.log('This login already exist');

        return;
      }

      const user = {
        name: loginValue,
        email: emailValue,
        password: passwordValue,
        gender: genderValue,
      };

      await AsyncStorage.setItem(loginValue, JSON.stringify(user));

      navigation.navigate('Login');
    } else {
      console.log('Fill all fields');
    }
  };

  const checkGender = value => {
    if (!genderValue || genderValue !== value) {
      setGenderValue(value);

      return true;
    }

    setGenderValue(null);

    return false;
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Your email"
        name="email"
        secure={false}
        saveValue={setEmailValue}
      />
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
      <View style={styles.checkboxContainer}>
        <Chip
          onPress={() => checkGender(CONSTANTS.GENDER_ENUM.girl)}
          style={styles.chipStyle}
          selected={genderValue === CONSTANTS.GENDER_ENUM.girl ? true : false}
          avatar={
            <Image
              style={styles.image}
              source={require('../../img/girl.png')}
            />
          }
        />
        <Chip
          onPress={() => checkGender(CONSTANTS.GENDER_ENUM.boy)}
          style={styles.chipStyle}
          selected={genderValue === CONSTANTS.GENDER_ENUM.boy ? true : false}
          avatar={
            <Image style={styles.image} source={require('../../img/boy.png')} />
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={saveUser}>
        <Text style={styles.buttonTitle}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}
