import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'

const walk2 = () => {
  const handleNext = () => {
    router.push('/onboarding/walk3')
  }
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/payment.png')}
                               style={{ height: '300%', width: '300%', marginBottom:70,width:250,height:250}} ></Image>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          
          <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Easy Payment</Text>
        </View>
        <View style={{ position: 'absolute', bottom: 60 }}>
          <TouchableOpacity
            onPress={handleNext}
            style={{
              backgroundColor: 'green',
              padding: 20,
              borderRadius: 35,
              width: '150',
              alignItems: 'center',
              justifyContent: 'center',
              margin:'horizantal'
            }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  export default walk2
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })