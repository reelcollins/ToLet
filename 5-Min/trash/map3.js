import React from 'react';
import MapView, {  PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,

} from "react-native";

import Constants from "expo-constants";


const {width, height} = Dimensions.get("window");

const ASPECT_RATIO = width /height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const { location, latitude, longitude } = props.route.params;

const INITIAL_POSITION = {
  latitude: latitude,
  longitude: longitude,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};


export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      provider= {PROVIDER_GOOGLE}
      initialRegion=  {INTIAL_POSITION}/>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
    searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },

});
