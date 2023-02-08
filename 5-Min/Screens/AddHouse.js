import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/native';

export default function AddHouse() {
  const [imageUris, setImageUris] = useState([]);
  const navigation = useNavigation();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
      });
      if (!result.cancelled) {
        const selectedImages = result.assets.map(asset => asset.uri);
        setImageUris([...imageUris, ...selectedImages]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UploadDetails', { images: imageUris })}>
        <Text style={styles.buttonText}>Select Images</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {imageUris.map((uri, index) => (
          <Image key={index} style={styles.image} source={{ uri }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3897f0',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
