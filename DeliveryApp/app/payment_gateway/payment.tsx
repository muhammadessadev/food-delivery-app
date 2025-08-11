import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { IP_ADDRESS } from '@/constants/endpoint';

export default function PaymentMethodScreen() {
  const router = useRouter();
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    axios.get(`${IP_ADDRESS}/payment-methods`)
      .then(res => setMethods(res.data))
      .catch(() => Alert.alert('Error', 'Failed to load payment methods'));
  }, []);

  const handleSelect = (method) => {
    router.push({
      pathname: '/checkout',
      params: { paymentMethod: JSON.stringify(method) }
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Select Payment Method
      </Text>
      <FlatList
        data={methods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelect(item)}
            style={{
              backgroundColor: '#f0f0f0',
              padding: 15,
              borderRadius: 8,
              marginBottom: 10
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
