import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate('Sign In');
  };
  


  const handleSubmit = () => {
    // Validate input
    if (!username) {
      // Display an error message if username is invalid
      return;
    }
    if (!email) {
      // Display an error message if email is invalid
      return;
    }
    if (!password) {
      // Display an error message if password is invalid
      return;
    }
    if (password.length < 8) {
      // Display an error message if password is too short
      return;
    }
    if (password !== passwordConfirm) {
      // Display an error message if password and passwordConfirm don't match
      return;
    }
  
    // Send a request to the server to create a new account
    signUp(username, email, password).then((response) => {
      if (response.success) {
        // Navigate to the home screen if sign up is successful
        navigation.navigate('Home');
      } else {
        // Display an error message if sign up fails
      }
    });
  };
  

  const signUp = (username, email, password) => {
    const data = {username, email, password};

    return axios.post('http://127.0.0.1:8000/signup/', data)
  };

  

  
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignIn}>
        <Text>Already have an account? Sign In</Text>
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

