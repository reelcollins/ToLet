import React from 'react'
import {Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UploadDetails() {
    const navigation = useNavigation();

    //pass location added to map


    //Refresh the House while going back
    

  return (

    <ScrollView vertical style={styles.container}>
      <Text style={styles.label}>Apartments</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Location</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Size</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Price</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Floor</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>House Number</Text>
      <TextInput style={styles.input} />
      
      <Text style={styles.label}>Contact</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UploadMap')}>
        <Text style={styles.buttonText}>Select Location On Map</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Wishlist')}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      
    </ScrollView>
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
