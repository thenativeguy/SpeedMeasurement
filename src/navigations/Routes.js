import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'

const Routes = () => {
    return (
       <NavigationContainer>
           <HomeStack />
       </NavigationContainer>
    )
}

export default Routes
