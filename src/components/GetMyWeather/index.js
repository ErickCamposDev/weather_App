import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import GetLocation from 'react-native-get-location'
import Geocoder from 'react-native-geocoder'
import *as actions from '../../store/actions'

/**

Component that sends the data to make the request
 and renders the start button or the Refresh 
 button, based on the parameter: welcome
*@param welcome
*@param Navigation
 */
export default function GetMyWeather({ navigation, welcome }) {

  const dispatch = useDispatch()

  /**
  Function that takes the user's current location and then 
  triggers an action to make the request in the API, sending 
  the city name as an action parameter
  *
  */
  async function getLocal() {
    const local = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        var lat = location.latitude
        var lng = location.longitude
        Geocoder.geocodePosition({ lat, lng }).then(res => {
          dispatch(actions.getWeather(res[0].subAdminArea))
        })
          .catch(err => console.log(err))
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  if (welcome) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          getLocal()
          navigation.navigate('Home')
        }}
      >
        <Text style={styles.text}>
          Get Weather Info
          </Text>
      </TouchableOpacity>
    );
  }
  else {
    return (
      <TouchableOpacity
        style={styles.refreshContainer}
        onPress={() => {
          getLocal()
          dispatch(actions.setLoading(true))
        }}
      >
        <Image
          source={require('../../assets/images/iconRefresh.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.refreshtext}>
          Refresh
        </Text>
      </TouchableOpacity>
    )
  }


}