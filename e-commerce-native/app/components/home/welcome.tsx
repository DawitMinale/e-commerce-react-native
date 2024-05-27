import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export type RootStackParamList = {
  Search: undefined;
};
type WelcomeNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Welcome = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();

  return (
    <View className="relative bottom-4">
      <View className="w-full ">
        <Text className="font-bold  text-4xl mt-3 mx-2">Find The Most</Text>
        <Text className="font-bold  text-4xl mt-3 mx-2 text-[#346e73]">
          Luxurious Furniture
        </Text>
      </View>
      <View className="flex flex-row justify-center items-center  bg-[#DDF0FF] rounded-2xl my-4 h-[40px] mx-1  ">
        <TouchableOpacity>
          <Feather
            name="search"
            size={24}
            color="gray"
            className="mx-3 text-gray-600 opacity-80"
          />
        </TouchableOpacity>
        <View className="flex-1 bg-[#DDF0FF] rounded-xl mr-3 w-full">
          <TextInput
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for?"
            className="w-full h-full px-[10px]"
          />
        </View>
        <View>
          <TouchableOpacity className="w-[50px] h-full bg-[#2A4D50] rounded-2xl flex items-center justify-center">
            <Ionicons name="camera-outline" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
