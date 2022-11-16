import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ChevronRightIcon,
  Cog6ToothIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  UserPlusIcon,
} from "react-native-heroicons/solid";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const PersonalScreen = () => {
  const navigation: { navigate (a: string) : void , goBack () : void  }   = useNavigation();


  return (
    <View>
      <View className="bg-[#00CCBB] w-full h-[160px]">
      <TouchableOpacity
        onPress={navigation.goBack}
        className="z-50 absolute top-10 left-5 p-2 bg-[#fff] rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
        <View className="flex-row items-center justify-between px-5 pt-24">
          <View className="bg-[#fff] rounded-full p-2">
            <UserIcon color="#00CCBB" size="40" />
          </View>

          <View className="flex-row space-x-2">
          <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
           className="">
            <View className="p-2 bg-[#fff] rounded-sm">
              <Text className="text-[#00CCBB]">Đăng nhập</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          className="p-2 bg-[#fff] rounded-sm">
            <Text className="text-[#00CCBB]">Đăng ký</Text>
          </TouchableOpacity>
          </View>


        </View>
      </View>

      <View className="bg-gray-200 h-full">
        <TouchableOpacity>
          <View className="flex-row items-center space-x-2 p-3 border bg-white border-gray-300">
            <MapPinIcon size="22" color="#00CCBB" />
            <Text className="flex-1 text-gray-400">Địa chỉ</Text>
            <ChevronRightIcon size={22} color="#00CCBB" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row items-center space-x-2 p-3 border bg-white border-gray-300">
            <Cog6ToothIcon size="22" color="#00CCBB" />
            <Text className="flex-1 text-gray-400">Cài đặt</Text>
            <ChevronRightIcon size={22} color="#00CCBB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="flex-row items-center space-x-2 p-3 border bg-white border-gray-300 mt-2">
            <UserPlusIcon size="22" color="#00CCBB" />
            <Text className="flex-1 text-gray-400">Mời bạn bè</Text>
            <ChevronRightIcon size={22} color="#00CCBB" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View className="flex-row items-center space-x-2 p-3 border bg-white border-gray-300">
            <QuestionMarkCircleIcon size="22" color="#00CCBB" />
            <Text className="flex-1 text-gray-400">Trung tâm Trợ giúp</Text>
            <ChevronRightIcon size={22} color="#00CCBB" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalScreen;
