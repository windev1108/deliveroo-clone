import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";
import { RestaurantModal } from '../modal'


interface Navigation {
  navigate: (a:string, b: RestaurantModal) => void;
}

const RestaurantCard: FC<RestaurantModal> = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation:Navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <View className="bg-white shadow mr-3 h-60 w-64 overflow-hidden">
        <Image
          source={{
            uri: imgUrl && urlFor(imgUrl).url(),
          }}
          className="h-36 w-ful object-fill rounded-sm"
        />
        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row items-center space-x-2 ">
            <StarIcon size={22} opacity={0.5} color="green" />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
          </View>
          <View className="flex-row items-center space-x-2 pr-3">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
