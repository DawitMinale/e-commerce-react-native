import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "@/constants";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import Welcome from "../components/home/welcome";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";

const Home = () => {
  return (
    <SafeAreaView>
      <View className={`mx-[22px] relative bottom-4 `}>
        <View className="flex flex-row justify-between items-center  ">
          <Ionicons name="locate-outline" size={24} color="black" />
          <Text className={`text-${SIZES.medium} font-semibold text-gray-400 `}>
            Addisababa, Ethiopia
          </Text>
          <View className="flex items-end ">
            <View className="absolute bottom-[16px] w-4 h-4  rounded-lg bg-green-600  z-50 flex justify-center items-center">
              <Text className=" font-[600px] text-[12px] text-white">9</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
