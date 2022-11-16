import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation: { navigate(a: string): void } = useNavigation();
  const { restaurant } = useSelector((state: any) => state.restaurant);



  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg text-gray-400">
                Thời gian đến dự kiến
              </Text>
              <Text className="text-4xl font-bold">44-55 Phút</Text>
            </View>
            <Image
              source={require("../../assets/ordering.gif")}
              className="w-20 h-20"
            />
          </View>

          <Progress.Bar color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Order của bạn tại {restaurant.title} đang chuẩn bị
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion=
        {{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
            coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-20">
          <Image 
            source={{
                uri : "https://links.papareact.com/wru"
            }}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          />

          <View className="flex-1">
            <Text className="text-lg">Win</Text>
            <Text className="text-gray-400">Tài xế của bạn</Text>
          </View>
            <Text 
            className="text-[#00CCBB] text-lg mr-5">Gọi</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
