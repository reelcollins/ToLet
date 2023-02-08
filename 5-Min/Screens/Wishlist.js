import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WishlistContainer from './WishlistContainer';
// import UploadContainer from './Upload';
import WishlistDetail from './WishlistDetail';
import Map from './Map';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function Wishlist() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="WishlistContainer" component={WishlistContainer} />
      {/* <Stack.Screen name="Wishlist" component={UploadContainer} /> */}
      <Stack.Screen
        name="HouseDetails"
        component={WishlistDetail}
        initialParams={{ navigate: navigation.navigate }}
      />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

export default Wishlist;
