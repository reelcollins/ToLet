import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function ProductDetail(props) {
  const { house } = props.route.params;
  const [wishlist, setWishlist] = useState([]);
  const { navigate } = props.route.params;


  const addHouseToWishlist = async (wishlistId, houseId) => {
      try {
          const response = await axios.post(`http://localhost:8000/wishlists/${wishlistId}/add_house/`, {
              house_id: houseId,
          });
          return response.data;
      } catch (error) {
          throw error;
      }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://picsum.photos/200'}}
        resizeMode="cover"
      />
      
      <Text style={styles.price}>{house.size}</Text>
      <Text style={styles.price}>{house.location}</Text>
      <Text style={styles.price}>Price: Ksh.{house.price}</Text>
      <Text style={styles.price}>Contacts:{house.contact}</Text>
      <Text style={styles.description}>Apartment: {house.apartment}</Text>
      <Text style={styles.description}>Floor: {house.floor}</Text>
      <Text style={styles.description}>House Number: {house.housenumber}</Text>

      <Text style={styles.description}>Latitude:{house.latitude}</Text>
      <Text style={styles.description}>longitude:{house.longitude}</Text>
      <TouchableOpacity style={styles.button} onPress={addHouseToWishlist}>
        <Text style={styles.buttonText}>Add to Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
                        onPress={() => navigate('Map',
                        { location: house.location,
                          latitude: house.latitude,
                          longitude: house.longitude 
                          })}>

        <Text style={styles.buttonText}>View on Map</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    color: 'red',
  },
  button: {
    backgroundColor: 'white',
  },
});
