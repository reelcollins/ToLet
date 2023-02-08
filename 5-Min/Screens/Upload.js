import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UploadContainer from './UploadContainer';
import WishlistDetail from './WishlistDetail';
import Map from './Map';
import AddHouse from './AddHouse';
import UploadDetails from './UploadDetails';
import UploadMap from './UploadMap';

import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function Upload() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Wishlist" component={UploadContainer} />
      <Stack.Screen
        name="HouseDetails"
        component={WishlistDetail}
        initialParams={{ navigate: navigation.navigate }}
      />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="AddHouse" component={AddHouse} />
      <Stack.Screen name="UploadDetails" component={UploadDetails} />
      <Stack.Screen name="UploadMap" component={UploadMap} />
    </Stack.Navigator>
  );
}

export default Upload;
