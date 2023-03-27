import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Animated from "react-native-reanimated";
import cities from "../_app/assets/data/cites";
import SkeletionItem from "../_app/components/SkeletionItem";
const CityItem = ({ item }) => {
  return (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.city}>
        <Animated.Image
          sharedTransitionTag={`image-${item.id}`}
          style={styles.image}
          source={{ uri: item.image }}
        />
        <Animated.Text
          sharedTransitionTag={`title-${item.id}`}
          style={styles.name}
        >
          {item.name}
        </Animated.Text>
      </Pressable>
    </Link>
  );
};

const CityGrid = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <FlatList
        data={Array(10)}
        renderItem={() => <SkeletionItem />}
        numColumns={2}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CityItem item={item} />}
        numColumns={2}
      />
    </View>
  );
};

export default CityGrid;

const styles = StyleSheet.create({
  city: {
    flex: 1,
    aspectRatio: 1,
    left: 6,
    marginHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "70%",
    backgroundColor: "gainsboro",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
});
