import React, { useState, useEffect } from 'react';
import { View, Animated, Image, Text } from 'react-native';
import axios from 'axios';

export default function House({ house }) {
  const [images, setImages] = useState([]); // Initialize the images state variable with an empty array
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Declare a state variable for the current image index
  const imageOpacity = new Animated.Value(0); // Declare a state variable for the Animated.Value that will be used to animate the image's opacity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageResponse = await axios.get(`http://127.0.0.1:8000/images/?house=${house.id}`);
        setImages(imageResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Animate the image's opacity between 0 and 1 in a loop
  useEffect(() => {
    Animated.loop(
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {
        iterations: images.length - 1,
      }
    ).start(() => {
      // Reset the current image index when the end of the sequence is reached
      if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
      // Reset the image's opacity to 0
      imageOpacity.setValue(0);
    });
  }, [currentImageIndex, images.length, imageOpacity]);

  // Set the image source to the current image in the sequence
  const imageSource = images[currentImageIndex].image;
  if (typeof imageSource === 'undefined') {
    return (
      <View>
        <Text>An error occurred while loading the images.</Text>
      </View>
    );
  }
  

  // Only render the House component if the images array is not empty
  if (images.length > 0) {
    return (
      <View>
        <Animated.Image
          source={{ uri: imageSource }}
          style={{ width: 200, height: 200 }}
          // Animate the image's opacity between 0 and 1
          opacity={imageOpacity}
        />
        <Text>{house.location}</Text>
        <Text>KSh.{house.price}</Text>
        <Text>{house.size}</Text>
      </View>
    );
  }

  // If the images array is empty, don't render the House component
  return null;
}
