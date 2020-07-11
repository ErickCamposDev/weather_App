import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles'
import WeatherDetails from '../../components/WeatherDetails'
import CityName from '../../components/CityName'
import Temperature from '../../components/Temperature'
import GetMyWeather from '../../components/GetMyWeather'

/**
Screen for presenting the data collected from the API
 */
export default function Home() {

  useEffect(() => { }, [loading])

  const { weather, loading } = useSelector(state => state.weather)

  if (loading == true) {
    return (
      <View style={styles.activeIndicatorView}>
        <ActivityIndicator color='black' size={50} />
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <CityName cityName={weather.name} />
        <Temperature Temperature={`${weather.main.temp} K`} />
        <View style={styles.info}>
          <WeatherDetails info={'Weather:'} value={`${weather.weather[0].description}`} />
          <WeatherDetails info={'Feels Like:'} value={`${weather.main.feels_like} K`} />
          <WeatherDetails info={'Temp Min :'} value={`${weather.main.temp_min} K`} />
          <WeatherDetails info={'Temp Max:'} value={`${weather.main.temp_max} K`} />
          <WeatherDetails info={'Humidity:'} value={`${weather.main.humidity} %`} />
          <WeatherDetails info={'Pressure:'} value={`${weather.main.pressure} hPa`} />
          <WeatherDetails info={'Sea Level:'} value={`${weather.main.temp_min} m`} />
          <GetMyWeather />
        </View>
      </View>
    )
  }
}