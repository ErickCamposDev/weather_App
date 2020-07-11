import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import GetMyWeather from '../../components/GetMyWeather'

/**
 * Screen that show a welcome message
 */
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Welcome to Weather App!
      </Text>

      <GetMyWeather navigation={navigation} welcome />
    </View>
  );
}