import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ProductDetails: { item: any };
};
type ProductNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProductCardView = ({ item }: any) => {
  const navigation = useNavigation<ProductNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails",{item})}
      className="mx-1"
    >
      <View className="w-[150px]   relative bottom-2  rounded-3xl bg-[#DDF0FF] ">
        <View className="flex-1 w-[140px] h-[90px]  m-2 rounded-xl overflow-hidden ">
          <Image
            source={{ uri: item.imageUrl }}
            className="w-full h-full object-cover "
          />
        </View>
        <View className="p-2 ">
          <Text className="text-xl font-bold" numberOfLines={1}>
            {item.title}
          </Text>
          <Text className="text-lg text-gray-500 " numberOfLines={1}>
            {item.supplier}
          </Text>
          <Text className="text-md font-bold" numberOfLines={1}>
            ${item.price}
          </Text>
        </View>
        <View>
          <TouchableOpacity className=" absolute bottom-2 right-1">
            <Ionicons name="add-circle" color={COLORS.primary} size={34} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
