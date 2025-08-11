 import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from "expo-router";
import axios from 'axios'; 
import { IP_ADDRESS } from '@/constants/endpoint';





const  login = () => {

  const [username, setUsername] = useState("Rahim")
 
  const [password, setPassword] = useState("123")
 ;

  const handlelogin = async () => {
    try {
      const response = await axios.post(`${IP_ADDRESS}/login`,{
        username,
     
        password,
     
      });

      Alert.alert("login suceesfully");
      router.push('/(tabs)'); // Navigate to the next screen after successful login>
      // <onboarding></onboarding>/new'); // Navigate somewhere else

    } catch (error) {
      console.log("login error:", error);
    const message =error.response?.data?.error || "login failed";
      Alert.alert("password or username is wrong", message);
    }
  };

  return (
    <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={require('../../assets/images/login.png')}
                                     style={{ marginLeft:10 ,marginBottom:30,width:205,height:200}} ></Image>
      <Text style={styles.title}>login your Account</Text>

      <TextInput placeholder='username' style={styles.input} value={username} onChangeText={setUsername} />
      
      <TextInput placeholder='password' style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.greenBtn} onPress={handlelogin}>
        <Text style={styles.greenBtnText}>login</Text>
      </TouchableOpacity>

      
   <View style={styles.iconContainer}>
  
</View>
 <Text style={styles.link} onPress={() => router.push("/(tabs)")}></Text>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        padding: 30,
        paddingTop:60
       

    },
 
 iconContainer: {

  flexDirection: 'row',
  justifyContent: 'space-between',  
  marginHorizontal:20,  
  alignItems: 'center',
  paddingVertical: 10,
  
},
 
      

    input:{
         borderRadius:12,
         padding:14,
         backgroundColor:'lightgray',
         marginVertical:8
    },

    greenBtn: {
    backgroundColor: "green",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

 



    greenBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  footerText: {
    marginTop: 7,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },

  link: {
    color: "green",
    fontWeight: "bold",
  },

   title: {
    
   },
    
})