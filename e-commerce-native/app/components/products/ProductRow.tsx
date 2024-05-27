import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import ProductCardView from "./ProductCardView";
import useFetch from "@/app/hooks/useFetch";
import { COLORS, SIZES } from "@/constants";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

  console.log(error);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center text-center">
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {(error as Error).message}</Text>;
  }

  return (
    <View className="">
      {isLoading ? (
        <ActivityIndicator
          size={SIZES.xxLarge}
          color={COLORS.primary}
        ></ActivityIndicator>
      ) : error ? (
        <Text>Something went Wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item: any) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: 10 }}
        ></FlatList>
      )}
    </View>
  );
};

export default ProductRow;
