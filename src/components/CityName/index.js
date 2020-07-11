import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

/**
 * Component made to render the City Name received from the server
 */
export default function CityName({ cityName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {cityName}
      </Text>
    </View>
  );
}