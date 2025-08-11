import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'

const walk3 = () => {
  const handleNext = () => {
    router.push('/onboarding/walk4')
  }
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/delivery.png')}
                                style={{  marginBottom:70,width:250,height:250}} ></Image>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          
          <Text style={{ fontWeight: 'bold', fontSize: 40, marginLeft: 10 }}>Fast Delivery</Text>
        </View>
        <View style={{ position: 'absolute', bottom: 60 }}>
          <TouchableOpacity
            onPress={handleNext}
            style={{
              backgroundColor: 'green',
              padding: 20,
              borderRadius: 30,
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
  
  export default walk3
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })