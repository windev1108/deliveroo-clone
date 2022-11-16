import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { RestaurantModal } from "../modal";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import Currentcy from "react-currency-formatter";
import {
  removeFromBasket,
  selectBasketTotal,
} from "../redux/features/basketSlice";

const BasketScreen = () => {
  const navigation : { navigate (a:string) : void , goBack () : void } = useNavigation();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state: any) => state.restaurant);
  const { items } = useSelector((state: any) => state.basket);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results: any, item: any) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <View className="rounded-full bg-gray-100 absolute top-3 right-5">
            <TouchableOpacity onPress={navigation.goBack}>
              <XCircleIcon color="#00CCBB" size={50} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupItemsInBasket).map(([key, items]: any) => (
            <View
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
              key={key}
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-500">
                <Currentcy quantity={items[0]?.price} currency={"USD"} />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currentcy quantity={basketTotal} />
            </Text>
          </View>

          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currentcy quantity={5.99} />
            </Text>
          </View>

          <View className="flex-row justify-between ">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currentcy quantity={basketTotal + 5.99} />
            </Text>
          </View>

          <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrderScreen")}
          >
            <View className="rounded-lg bg-[#00CCBB] p-4">
              <Text className="text-center text-white text-lg font-bold">
                Place Order
              </Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
