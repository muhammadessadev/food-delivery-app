import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native'

const Welcome = () => {
  const handleNext = () => {
    router.push('/onboarding/intro')
  }
  return (
    
    <View style={styles.container}> 
    
      
      
      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        
        <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Foodu</Text>
      </View>
      <View style={{ position: 'absolute', bottom: 60 }}>
        <TouchableOpacity
          onPress={handleNext}
          style={{
            backgroundColor: 'green',
            padding: 20,
            borderRadius: 30,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})