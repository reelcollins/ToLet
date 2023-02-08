import React, { useState, useEffect } from 'react';
import { View,Animated, Image, StyleSheet, ScrollView, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { RCTAnimation } from 'react-native';


export default function ImageContainerOne() {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  // Declare a state variable for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Declare a state variable for the Animated.Value that will be used to animate the image's opacity
  const imageOpacity = new Animated.Value(0);

  // Set the image source to the current image in the sequence
  const imageSources = houses.map(house => house.images[0].image);
  const imageSource = imageSources[currentImageIndex];


  // Animate to the next image in the sequence after a delay
  setTimeout(() => {
    // Reset the image's opacity to 0
    imageOpacity.setValue(0);
    // Set the current image index to the next image in the sequence
    setCurrentImageIndex(currentImageIndex + 1);
  }, 1000);

  // Reset the current image index when the end of the sequence is reached
  if (currentImageIndex === imageSources.length - 1) {
    setCurrentImageIndex(0);
  }

  // Animate the image's opacity between 0 and 1
  Animated.timing(imageOpacity, {
    toValue: 1,
    duration:1000,
    useNativeDriver: true
  }).start();


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the house details
        const houseResponse = await axios.get('http://127.0.0.1:8000/toooleeet/houses/');
        const houses = houseResponse.data;
  
        // Fetch the images for each house
        const imagePromises = houses.map(async house => {
          const imageResponse = await axios.get(`http://127.0.0.1:8000/images/?house=${house.id}`);
          house.images = imageResponse.data;
          return house;
        });
        const updatedHouses = await Promise.all(imagePromises);
  
        // Set the houses state variable
        setHouses(updatedHouses);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);


  const renderItem = ({ item, style }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('HouseDetails', { house: item, navigate: navigation.navigate })}
    >
      <View style={[styles.container, style]}>
      <Text style={styles.location}>{item.location}</Text>
        
        <Animated.Image
          style={styles.image}
          source={{uri: imageSource}}
          resizeMode="cover"
          // Animate the image's opacity between 0 and 1
          opacity={imageOpacity}
        />
        <View style={styles.priceContainer}>
          
          <Text style={styles.price}>KSh.{item.price}</Text>
          <Text style={styles.description}>{item.size}</Text>
          
          
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Search for Houses"
          placeholderTextColor="#80808080"

        />
      </View>
      <FlatList
        numColumns={2}
        data={houses.filter(house => house.location.toLowerCase().includes(searchTerm.toLowerCase()))}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  searchBarContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10
  },
  container: {
    alignItems: 'center',
    
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  image: {
    width: 170,
    height: 200,
    
  },
  priceContainer: {
    padding: 10,
    
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    color: '#808080'
  },
  columnWrapper: {
    marginBottom: 15
  },
  location:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5

  }
});
