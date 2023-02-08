import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


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
  