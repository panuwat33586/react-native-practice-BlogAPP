import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from './src/screen/IndexScreen'

const navigator =createStackNavigator({
      Index:IndexScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blog App'
  }
})

export default createAppContainer(navigator)