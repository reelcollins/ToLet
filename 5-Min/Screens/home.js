import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ImageContainerOne from './ImageContainerOne';
import ProductDetail from './ProductDetail';
import Map from './Map';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function Home() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="TooLeet" component={ImageContainerOne} />
      <Stack.Screen
        name="HouseDetails"
        component={ProductDetail}
        initialParams={{ navigate: navigation.navigate }}
      />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

export default Home;
