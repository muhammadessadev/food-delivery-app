import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IP_ADDRESS } from "@/constants/endpoint";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryRestaurents() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [restaurents, setRestaurents] = useState([]);

  useEffect(() => {
    fetchRestaurents();
  }, [id]);

  const fetchRestaurents = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/categories/${id}/restaurents`);
      setRestaurents(response.data);
    } catch (error) {
      console.log("Error fetching restaurents:", error);
    }
  };

  const handleFavoritePress = (restaurentId) => {
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity

      onPress={() =>{
        console.log(item.restaurent_id)
         router.push(`/restaurents/${item.restaurent_id}`)}
        }
    >
      <View style={styles.card}>
        <Image source={{ uri: item.image_url }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.restaurent_name}</Text>
          <View style={styles.cardInfoRow}>
            <Text style={styles.infoText}>
              <Ionicons name="star" size={14} color="#FFA500" /> {item.avg_rating} ({item.rating_count}k)
            </Text>
          </View>
          <View style={styles.cardInfoRow}>
            <Text style={styles.priceText}>${item.price}</Text>
            <TouchableOpacity onPress={() => handleFavoritePress(item.restaurent_id)}>
              <Ionicons
                name={item.isFavorite ? "heart" : "heart-outline"}
                size={22}
                color={item.isFavorite ? "#e74c3c" : "#bbb"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="arrow-back" size={24} color="#010d06ff" />
        </TouchableOpacity>
        <Text style={styles.title}>List of Restaurants</Text>
      </View>
      
      <FlatList
        data={restaurents}
        keyExtractor={(item) => item.restaurent_id.toString()}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 16,
  },
  iconBtn: {
    marginRight: 8,
    padding: 4,
  },
  title: { fontSize: 22, fontWeight: "bold" },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 18,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: { width: 70, height: 70, borderRadius: 12, marginRight: 14 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  cardInfoRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  infoText: { fontSize: 13, color: "#888", marginRight: 12 },
  priceText: { fontSize: 15, color: "#1a974e", fontWeight: "bold", flex: 1 },
});