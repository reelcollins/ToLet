import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UploadMap() {
//pass location to the search so that it zooms close to the actual place.

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map screen</Text>
      <Text style={styles.text}>Location:</Text>
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

