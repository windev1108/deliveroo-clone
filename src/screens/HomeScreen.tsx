import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../../sanity";

interface FeaturedCategory {
  _id: string;
  name: string;
  short_description: string;
}

const HomeScreen = () => {
  const navigation : { navigate (a: string): void } = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);



  useEffect(() => {
    sanityClient
      .fetch(
        `
       *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
       }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row py-2 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-9 h-9 p-4 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <TouchableOpacity
        onPress={() => navigation.navigate("Personal")}
        >
          <UserIcon size={30} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Row */}

        {featuredCategories?.map((category: FeaturedCategory) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
