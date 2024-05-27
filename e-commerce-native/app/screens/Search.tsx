import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import ProductCardView from "../components/products/ProductCardView";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    //search for the product
    console.log(searchKey);
    try {
      const response = await axios.get(
        `http://10.5.232.74:3005/api/products/search/${searchKey}`
      );
      console.log(response);
      console.log(`http://10.5.232.253:3005/api/products/search/${searchKey}`);
      setSearchResult(response.data);
      console.log("result", searchResult);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-center items-center  bg-[#DDF0FF] rounded-2xl my-4 h-[50px] mx-2 ">
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={24}
            color="gray"
            className="mx-3 text-gray-600 opacity-80"
          />
        </TouchableOpacity>
        <View className="flex-1 bg-[#DDF0FF] rounded-xl mr-3 w-full">
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for?"
            className="w-full h-full px-[10px]"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={handleSearch}
            className="w-[50px] h-full bg-[#2A4D50] rounded-2xl flex items-center justify-center"
          >
            <Feather name="search" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View  className="flex justify-center items-center ">
          <Image source={require("./../../assets/images/Pose23.png")} className="object-contain w-[95%] mr-10 h-[85%] opacity-80 "/>
        </View>
      ) : (
        <FlatList
          data={searchResult}
          numColumns={1}
          renderItem={({ item }) => <SearchTile item={item} />}
          keyExtractor={(item: any) => item._id}
          ItemSeparatorComponent={() => <View className="h-[16px]" />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
