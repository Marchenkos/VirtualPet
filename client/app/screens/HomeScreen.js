import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    fontFamily: 'Courgette-Regular',
    padding: 10,
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    width: Dimensions.get('window').width / 3,
    marginTop: 15,
  },
  buttonTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Courgette-Regular',
  },
  title: {
    fontSize: 50,
    fontFamily: 'Courgette-Regular',
  },
});

export default function Home({navigation}) {
  const navigateToRegistrationPage = () => {
    navigation.navigate('Registration');
  };

  const navigateToLoginPage = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToRegistrationPage}>
          <Text style={styles.buttonTitle}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToLoginPage}>
          <Text style={styles.buttonTitle}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
