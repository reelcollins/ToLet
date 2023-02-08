import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';



export default function LandlordSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Update Your Details</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Contacts</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Location</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In As Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
       
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
