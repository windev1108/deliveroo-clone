import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import RNOtpVerify from "react-native-otp-verify";
import { setOTP, setCountdown } from "../redux/features/otpSplice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

type State = {
  phone: string;
  password: string;
  repearPassword: string;
};

const SignupScreen = () => {
  const navigation: { navigate(a: string): void; goBack(): void } =
    useNavigation();
  const { countdown, otp } = useSelector((state: RootState) => state.otp);

  const dispatch = useDispatch();
  const [state, setState] = useState<State>({
    phone: "",
    password: "",
    repearPassword: "",
  });
  const { phone, password, repearPassword } = state;



  const handleSendOTP = () => {
    if (phone) {
      navigation.navigate("OTP");
      dispatch(setOTP(Math.floor(Math.floor(Math.random() * 900000) + 100000)));
    } else {
      return;
    }
  };

  return (
    <View className="bg-gray-200 h-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Personal")}
        className="z-50 absolute top-10 left-5 p-2 bg-[#fff] rounded-full"
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>
      <View className="flex-col items-center pt-12">
        <View className="w-20 h-20 bg-[#00CCBB] p-3 rounded-full">
          <Image
            source={require("../../assets/W.png")}
            className="w-full h-full object-fill text-center"
          />
        </View>
        <Text className="font-bold text-xl text-gray-400">Đăng ký</Text>
      </View>

      <View className="mx-4 mt-6 flex-col space-y-2">
        <TextInput
          defaultValue={phone}
          onChangeText={(newText) => setState({ ...state, phone: newText })}
          className="p-4 bg-white border border-gray-200"
          placeholder="Phone number"
        />
        {/* <View className="flex-col space-y-2">
            <TextInput
              className="p-4 bg-white border border-gray-200"
              placeholder="Password"
            />
            <TextInput
              className="p-4 bg-white border border-gray-200"
              placeholder="Repeat Password"
            />
          </View> */}
      </View>
      <TouchableOpacity
        onPress={handleSendOTP}
        className="mt-6 flex-row justify-center"
      >
        <View className="bg-[#00CCBB] rounded-full">
          <Text className="px-4 py-3 font-bold text-white ">Đăng ký</Text>
        </View>
      </TouchableOpacity>

      <View className="mt-6 flex-col items-center space-y-2">
        <Text className="text-gray-400">Đã có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
          className="w-[50%] bg-[#fe3233] rounded-full "
        >
          <Text className="text-center px-4 py-3 font-bold  text-white ">
            Đăng nhập ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
