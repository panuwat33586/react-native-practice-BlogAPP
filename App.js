import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Provider} from './src/context/BlogContext'
import IndexScreen from './src/screen/IndexScreen'
import ShowScreen from './src/screen/ShowScreen'
import CreateScreen from './src/screen/CreateScreen'

const navigator =createStackNavigator({
      Index:IndexScreen,
      Show:ShowScreen,
      Create:CreateScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blog App'
  }
})

const App=createAppContainer(navigator)

export default ()=>{
 return <Provider><App/></Provider>
}