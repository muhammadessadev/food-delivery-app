import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { IP_ADDRESS } from '@/constants/endpoint';

const Checkout = () => {
  const router = useRouter();

  
  const userId = '1';

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const deliveryFee = 150;

  useEffect(() => {
    if (userId) {
      fetchCartItems();
    }
  }, [userId]);

  const fetchCartItems = async () => {
    try {
      const res = await axios.get(`${IP_ADDRESS}/cart/${userId}`);
      const items = res.data?.cartItems || res.data;

      if (Array.isArray(items)) {
        setCartItems(items);
        const total = items.reduce(
          (sum, item) => sum + parseFloat(item.price) * item.quantity,
          0
        );
        setSubtotal(total);
      } else {
        console.error("API response was not a valid array:", res.data);
        setCartItems([]);
      }
    } catch (error) {
      console.log('Error fetching cart:', error);
      setCartItems([]);
      Alert.alert('Error', 'Failed to fetch cart data.');
    }
  };

  const handlePlaceOrder = async () => {
    if (!address.trim() || !paymentMethod) {
      Alert.alert(
        'Missing Information',
        'Please enter your address and select a payment method'
      );
      return;
    }

    try {
      await axios.post(`${IP_ADDRESS}/place-order`, {
        userId: userId,
        cartItems: cartItems,
        address: address.trim(),
        paymentMethod: paymentMethod.name,
        total: subtotal + deliveryFee,
      });

      Alert.alert('Order Placed!', 'Your order was successfully submitted.');
      router.push('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      Alert.alert('Error', 'Failed to place order. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Address Section */}
      <Text style={styles.sectionTitle}>Deliver to</Text>
      <View style={styles.box}>
        <TextInput
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          style={styles.addressInput}
          multiline
          numberOfLines={2}
        />
      </View>

      {/* Order Summary */}
      <Text style={styles.sectionTitle}>Order Summary</Text>
      <View style={styles.box}>
        {cartItems.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image
                source={{ uri: item.image_url }}
                style={styles.itemImage}
              />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.menu_item_name}</Text>
                <Text style={styles.itemDetail}>Quantity: {item.quantity}</Text>
                <Text style={styles.itemPrice}>
                  Price: ₨ {(parseFloat(item.price) * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>

      {/* Payment Method */}
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <TouchableOpacity
        style={styles.box}
        onPress={() => router.push('/payment_gateway/paymentoptions')}
      >
        <Text>{paymentMethod ? paymentMethod.name : 'Select Payment Method'}</Text>
      </TouchableOpacity>
      
      {/* Discounts (optional section) */}
      <Text style={styles.sectionTitle}>Get Discounts</Text>
      <View style={styles.box}>
        <Text>No discounts available</Text>
      </View>

      {/* Total Breakdown */}
      <View style={styles.box}>
        <View style={styles.totalRow}>
          <Text>Subtotal</Text>
          <Text>₨ {subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>Delivery Fee</Text>
          <Text>₨ {deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={{ fontWeight: 'bold' }}>Total</Text>
          <Text style={{ fontWeight: 'bold' }}>
            ₨ {(subtotal + deliveryFee).toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        style={[
          styles.placeOrderButton,
          !(address.trim() && paymentMethod) && { backgroundColor: '#ccc' },
        ]}
        disabled={!(address.trim() && paymentMethod)}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Checkout;

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    marginTop: 30, // Align with cart page header spacing
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20,
  },
  box: {
    backgroundColor: '#f0f0f0', 
    padding: 15, 
    borderRadius: 8,
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: 12,
    color: '#666',
  },
  itemPrice: {
    fontWeight: '500',
    marginTop: 4,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  placeOrderButton: {
   
    marginBottom: 100,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    
  },
  placeOrderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addressInput: {
    fontSize: 16,
    textAlignVertical: 'top',
  },
};