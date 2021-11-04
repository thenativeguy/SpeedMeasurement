import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthContext from './src/context/AuthContext'
import UserContext from './src/context/UserContext'
import Index from './src/navigations/Index'

const App = () => {
  return (
   <AuthContext>
     <UserContext>
     <Index />
   </UserContext>
   </AuthContext>
  )
}

export default App

const styles = StyleSheet.create({})
