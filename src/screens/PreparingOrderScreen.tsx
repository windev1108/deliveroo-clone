import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation : { navigate (a: string) : void}  = useNavigation();


  useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        },4000)
  },[])
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
       <Animatable.Image
          source={require("../../assets/waiting.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="h-96 w-96"
        />

        <Animatable.Text
         animation="slideInUp"
         iterationCount={1}
         className="text-lg my-10 text-white font-bold text-center"
        >
             Waiting for Restaurant to accrept your order!
        </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
