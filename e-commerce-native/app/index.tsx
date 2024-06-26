import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "@/app/navigation/BottomTabNavigation";
import Cart from "@/app/screens/Cart";
import ProductDetails from "./screens/ProductDetails";
import NewRivals from "./screens/NewRivals";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./../assets/fonts/Poppins-Regular.ttf"),
    bold: require("./../assets/fonts/Poppins-Bold.ttf"),
    medium: require("./../assets/fonts/Poppins-Medium.ttf"),
    light: require("./../assets/fonts/Poppins-Light.ttf"),
    semibold: require("./../assets/fonts/Poppins-SemiBold.ttf"),
    extrabold: require("./../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);



  if (!fontsLoaded) {
    return null;
  }



  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carts"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={NewRivals}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
