import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type RootStackParamList = {
    ProductDetails: { item: any };
  };
  type ProductNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SearchTile = ({ item }: any) => {
    const navigation=useNavigation<ProductNavigationProp>()
  return (
    <View>
      <TouchableOpacity className="flex-1 flex-row justify-between items-center mb-2 p-3 rounded-2xl bg-white shadow-xl" onPress={()=>navigation.navigate("ProductDetails",{item})}>
        <View className="w-[70px]  bg-[#DDF0FF] rounded-2xl justify-center items-center">
          <Image
            source={{ uri: item.imageUrl }}
            className="w-full h-[64px] object-cover rounded-2xl "
          />
        </View>
        <View className="flex-1 mx-4">
          <Text className="text-xl text-[#DDF0FF] font-bold ">
            {item.title}
          </Text>
          <Text className="text-lg text-gray-500 m-1 ">
            {item.supplier}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTile;
