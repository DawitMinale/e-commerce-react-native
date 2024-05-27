import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "@/app/hooks/useFetch";
import { COLORS, SIZES } from "@/constants";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center text-center">
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View className="  ">
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <ProductCardView item={item} />}
        keyExtractor={(item: any) => item._id}
        ItemSeparatorComponent={()=><View className="h-[16px]"/>}
      />
    </View>
  );
};

export default ProductList;
