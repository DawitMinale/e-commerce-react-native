import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const Carousel = () => {
  const slides = [
    "https://luxuryviewer.com/wp-content/uploads/2021/01/shutterstock_349464740-2048x1362.jpg",
    "https://th.bing.com/th/id/R.ff20b5ef8b0405610b226866b74b12f2?rik=eGIy74viLRY%2b%2bA&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2015%2f03%2f02%2f12556168%2fGeneva_Q1_Facade.jpg&ehk=JPpfgQiaCOhK7BwYU8TBB6FCKISsQc%2fvK6kd9ElEKGs%3d&risl=1&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.FjAYLTeHQvM3G2Eu8y7U5wHaHa?rs=1&pid=ImgDetMain",
  ];
  return (
    <View className="flex-1 items-center h-[100px] my-2 relative bottom-4 ">
      <SliderBox
      
        images={slides}
        dotColor="#2A4D50"
        inactiveDotColor="#DDF0FF"
        autoplay
        circleLoop
        ImageComponentStyle={{ borderRadius:15, width: "95%" ,}}
      />
    </View>
  );
};

export default Carousel;
