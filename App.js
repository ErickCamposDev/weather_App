import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import Welcome from './src/pages/Welcome'
import Home from './src/pages/Home'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

const Routes = createAppContainer(createStackNavigator({
  Welcome,
  Home,
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
))
export default App
