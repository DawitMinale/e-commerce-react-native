import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import ProductList from "../components/products/ProductList";

const NewRivals = ({navigation}:any) => {
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="mx-[20px] w-[90%] flex z-50  flex-row  justify-start items-center absolute bg-[#2A4D50] rounded-[24px]  top-[20px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite} />
        </TouchableOpacity>
        <Text className="font-semibold text-[20px] ml-[5px] text-white">Products</Text>
        
        </View>
        <View className="mt-20 ">
        <ProductList/>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
