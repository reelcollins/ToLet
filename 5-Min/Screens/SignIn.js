import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const goToSignUp = () => {
    navigation.navigate('Sign Up');
  };


  const handleSubmit = () => {
    // Validate input
    if (!email || !password) {
      // Display an error message if input is invalid
      return;
    }

    // Send a request to the server to log the user in
    login(email, password).then((response) => {
      if (response.success) {
        navigation.navigate('Home');
      } else {
        // Display an error message if login fails
      }
    });
  };

  const login = (email, password) => {
    return axios.post('http://localhost:8000/customers/', {
      email: email,
      password: password
    })
      .then(response => {
        // You can return the data received from the server here
        return response.data;
      });
  };
  
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToSignUp}>
        <Text>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});


