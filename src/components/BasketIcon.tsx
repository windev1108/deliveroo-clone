import { View, Text , TouchableOpacity } from "react-native";
import React  from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectBasketTotal , BasketSlice} from "../redux/features/basketSlice";
import Currency from "react-currency-formatter"
import { useNavigation } from "@react-navigation/native";



const BasketIcon = () => {
  const navigation : { navigate : (a: string) => void } = useNavigation()
  const { items } = useSelector((state: RootState) : any => state.basket);
  const basketTotal = useSelector((state: RootState) => selectBasketTotal(state))
    


  return (
    <View className="absolute z-10  w-full bottom-10">
        <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        >
        <View className="flex-row items-center bg-[#00CCBB] mx-4 p-4 rounded-lg space-x-1">
           <Text className="py-1 px-2 font-extrabold text-white bg-[#01A296]">{items.length}</Text>
           <Text className="flex-1 text-center text-white font-extrabold text-lg">View Basket</Text>
           <Text className="text-lg text-white font-extrabold">
               <Currency quantity={basketTotal} currency="USD" />
           </Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
