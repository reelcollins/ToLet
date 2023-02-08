import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Map(props) {
  const { location, latitude, longitude } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map screen</Text>
      <Text style={styles.text}>Location: {location}</Text>
      <Text >Latitude: {latitude}</Text>
      <Text >longitude: {longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

