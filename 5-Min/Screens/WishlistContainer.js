import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


{/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Wishlist(props) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/wishlists/')
      .then(response => {
        const wishlistIds = response.data;
        // Fetch the full details of each house using the ids
        Promise.all(wishlistIds.map(id => axios.get(`http://localhost:8000/houses/${id}`)))
          .then(results => {
            const houses = results.map(result => result.data);
            setWishlist(houses);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {wishlist.map(house => (
        <View key={house.id} style={styles.houseContainer}>
          <Image
            style={styles.image}
            source={{uri: house.imageUrl}}
            resizeMode="cover"
          />
          <Text style={styles.price}>{house.size}</Text> 
          <Text style={styles.price}>{house.location}</Text>
          <Text style={styles.price}>Price: Ksh.{house.price}</Text>
          <Text style={styles.price}>Contacts:{house.contact}</Text>
          <Text style={styles.description}>Apartment: {house.apartment}</Text>
          <Text style={styles.description}>Floor: {house.floor}</Text>
          <Text style={styles.description}>House Number: {house.housenumber}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Map', { location: house.location })}>
            <Text style={styles.buttonText}>View on Map</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}



*/}


  

export default function WishlistContainer() {
  const [houses, setHouses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/toooleeet/houses/', {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:19006',
            'Content-Type': 'application/json',
          },
        });
        setHouses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const deleteHouseFromWishlist = async (houseId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/wishlist/${houseId}`, {
        headers: {
          'Authorization': 'Bearer',
        },
      });
      // Refresh the data on the current screen
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item, style }) => (
    
      <View style={[styles.container, style]}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteHouseFromWishlist(item.id)}>
            <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.price}>{item.location}</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('HouseDetails', { house: item, navigate: navigation.navigate })}
            >
        <Image
          style={styles.image}
          source={{uri: 'https://picsum.photos/200'}}
          resizeMode="cover"
        />
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.description}>{item.size}</Text>
        </View>
      </View>
    
  );

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View style={styles.searchBarContainer}>
      </View>
      <FlatList
        numColumns={2}
        data={houses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 10,
  },
  priceContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 8,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
  },
  description: {
    fontSize: 11,
    fontWeight: 'bold',
    marginRight: 8,
  },
  deleteButton: {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: 'gray',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
},

  deleteButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  

  });
  