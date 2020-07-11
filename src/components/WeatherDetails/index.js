import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

/**
 * Component made to render the information received from the server
 */
export default function WeatherDetails({ info, value }) {
  return (
    <View style={styles.container} >
      <Text style={styles.Text}>
        {info}
      </Text>
      <Text style={styles.Text}>
        {value}
      </Text>
    </View>
  );
}