import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ProductList: undefined;
};
type HeadingNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Headings = () => {
  const navigation = useNavigation<HeadingNavigationProp>();
  return (
    <View className="mx-2 relative bottom-2">
      <View className="flex flex-row justify-between">
        <Text className="font-bold text-xl ">New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Ionicons name="grid" size={24} color={"#2A4D50"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
