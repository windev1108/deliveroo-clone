import { View, Text, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../../sanity";

interface Props {
  key: React.Key
  title: string;
  description: string;
  id: string,
  featuredCategory?: string;
}

interface Restaurant {
  _id : string,
  image: string,
  name: string,
  rating: number,
  type: { title : string},
  address: string,
  short_description: string,
  dishes: Array<any>,
  long: number,
  lat: number
}

const FeaturedRow: FC<Props> = ({ id, title, description }) => {
  const [ restaurants , setRestaurants ] = useState<[]>([])

  useEffect(()=>{
      sanityClient
      .fetch(
        `
       *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            title
          }
        },
       }[0]
      `,{ id }
      ).then(data => {
         setRestaurants(data?.restaurants) 
      })
  },[])

  
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
         {/* Restaurants Card */}

         {restaurants?.map((restaurant : Restaurant) => (
           <RestaurantCard 
           key={restaurant._id}
           id={restaurant._id}
           imgUrl={restaurant.image}
           title={restaurant.name}
           rating={restaurant.rating}
           genre={restaurant.type?.title}
           address={restaurant.address}
           short_description={restaurant.short_description}
           dishes={restaurant.dishes}
           long={restaurant.long}
           lat={restaurant.lat}
           />
         
         ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
