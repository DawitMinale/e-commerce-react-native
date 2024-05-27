import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS } from "@/constants";



type Props = {
  route: any;
  navigation: any;
};

const ProductDetails = ({ navigation, route }: Props) => {
  const { item } = route.params;
  console.log(item)
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View className="flex-1 bg-white ">
      <View className="flex   absolute top-2 z-40  flex-row justify-between items-center w-[99%] ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        className="object-cover h-60 w-full "
        source={{
          uri:item.imageUrl
        }}
      />

      <View className="mt-[-10px] bg-white w-full rounded-t-2xl">
        <View className="mx-[20px] flex flex-row justify-between items-center pb-3 relative top-[20px]">
          <Text className="font-bold text-[24px]">{item.title
}</Text>
          <View className="bg-[#DDF0FF] rounded-[20px]">
            <Text className="font-semibold text-[20px] p-[10px] ">{item.price}</Text>
          </View>
        </View>
        <View className=" flex flex-row justify-between items-center pb-3 relative top-[5px]">
          <View className="top-[20px] flex flex-row justify-start items-center mx-[20px]">
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons key={index} name="star" color="gold" size={24} />
              );
            })}
            <Text className="text-gray-500 font-medium">(4.9)</Text>
          </View>

          <View className="top-[20px] gap-2 flex flex-row justify-start items-center mx-[20px]">
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text className="text-gray-500 font-medium">{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-5 mx-6">
          <Text className="font-medium text-[18px]">Description</Text>
          <Text className="text-[16px] text-justify mb-[16px]">
            {item.description}
          </Text>
        </View>
        <View className="mb-[10px] ">
          <View className="flex flex-row justify-between items-center p-[5px] mx-3  rounded-xl bg-[#DDF0FF]">
            <View className="flex flex-row">
              <Ionicons name="location-outline" size={20} />
              <Text> {item.productLocation} </Text>
            </View>
            <View className="flex flex-row">
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>

        <View className=" flex flex-row justify-between items-center pb-3 mx-2 ">
          <TouchableOpacity
            onPress={() => {}}
            className="w-[78%] bg-black p-2 rounded-3xl ml-[12px]"
          >
            <Text className="font-bold text-xl text-white ml-2">Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="w-[37px] h-[37px]    flex justify-center items-center bg-black text-white rounded-[50px] m-[12px] "
          >
            <Fontisto
              name="shopping-bag"
              size={24}
              color={COLORS.lightWhite}
              className="text-white  w-full h-full z-50 "
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
