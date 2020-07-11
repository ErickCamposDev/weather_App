import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

/**
 * Component made to render the Temperature received from the server
 */
export default function Temperature({ Temperature }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Temperature}
      </Text>
    </View>
  );
}