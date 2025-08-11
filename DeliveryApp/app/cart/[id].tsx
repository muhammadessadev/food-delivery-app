import { Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IP_ADDRESS } from "@/constants/endpoint";

const CartPage = () => {
  const { id: userId } = useLocalSearchParams();
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [userId]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${IP_ADDRESS}/cart/${userId}`);
      setCartItems(res.data.cartItems || res.data);
    } catch (err) {
      console.error('Error fetching cart:', err);
      Alert.alert('Error', 'Failed to load cart items');
    }
  };

  // ✅ Delete one item - Updated with confirmation and better error handling
  const deleteItem = async (cartItemId) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            try {
              await axios.delete(`${IP_ADDRESS}/cart/item/${cartItemId}`);
              setCartItems(prev => prev.filter(item => item.cart_item_id !== cartItemId));
              Alert.alert('Success', 'Item removed from cart');
            } catch (err) {
              console.error("Error deleting item:", err);
              Alert.alert('Error', 'Failed to remove item');
            }
          },
        },
      ]
    );
  };

  const clearCart = async () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items from your cart?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, Clear",
          style: "destructive",
          onPress: async () => {
            try {
              await axios.delete(`${IP_ADDRESS}/cart/${userId}`);
              setCartItems([]);
              Alert.alert('Success', 'Cart cleared successfully');
            } catch (error) {
              console.error("Failed to clear cart:", error);
              Alert.alert('Error', 'Failed to clear cart');
            }
          },
        },
      ]
    );
  };

  const renderCartItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
      }}
    >
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Item: {item.item_name}</Text>
        <Text>Restaurant: {item.restaurent}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Note: {item.note || 'No notes'}</Text>
        <Text>Total Price: ${item.total_price}</Text>

        <TouchableOpacity
          onPress={() => deleteItem(item.cart_item_id)}
          style={{
            marginTop: 5,
            backgroundColor: "red",
            padding: 8,
            borderRadius: 5,
            width: 80,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>  
      </View>
      <Image
        source={{ uri: item.item_image }}
        style={{ width: 100, height: 100, borderRadius: 8 }}
      />
    </View>
  );

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8, marginTop: 30 }}>
        🛒 Cart
      </Text>

      {cartItems.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.cart_item_id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          <TouchableOpacity
            onPress={clearCart}
            style={{
              backgroundColor: "orange",
              padding: 15,
              borderRadius: 15,
              marginTop: 20
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Clear Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/payment_gateway/checkout")}
            style={{
              backgroundColor: "green",
              padding: 15,
              borderRadius: 15,
              marginTop: 20,
              marginBottom: 30
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CartPage;