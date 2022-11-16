import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setOTP } from "../redux/features/otpSplice";

const OTPScreen = () => {
  const dispatch = useDispatch();
  const { otp } = useSelector((state: RootState) => state.otp);
  const [state, setState] = useState({
    countdown: 10,
  });
  const { countdown } = state;
  const isCountDownRef = useRef<boolean>(true)
  const timerIdRef = useRef<any>();

  useEffect(() => {
    timerIdRef.current = setTimeout(() => {
      setState({ ...state, countdown: countdown - 1 });
    }, 1000);

    return () => {
      clearTimeout(timerIdRef.current);
    }
  }, [countdown]);

  useMemo(() => {
    if (countdown === 0) {
      clearTimeout(timerIdRef.current);
      isCountDownRef.current = false;
      dispatch(setOTP(Math.floor(Math.floor(Math.random() * 900000) + 100000)));
    }
  }, [countdown]);
 
  console.log('====================================');
  console.log("OTP :",otp);
  console.log('====================================');
  const handleResendOTP = () => {
    setState({ ...state, countdown: 10  });
    isCountDownRef.current = true;
  }
  return (
    <View className="flex-flex justify-center items-center">
      <View className="px-4 pt-10">
        <Text className="text-center text-gray-500 font-extrabold">
          Verify phone number
        </Text>
        <OTPInputView
          style={{ width: "80%", height: 200 }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 50,
            height: 65,
            borderWidth: 0,
            borderBottomWidth: 1,
            color: "#00CCBB",
          }}
          codeInputHighlightStyle={{ borderColor: "#00CCBB" }}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        {isCountDownRef.current ? (
          <Text className="text-center text-gray-500 font-bold">
            {`Mã OTP của bạn sẽ hết hạn sau ${countdown} giây`}
          </Text>
        ) : (
         <View className="flex-row items-center justify-center space-x-1">
           <Text className="text-center text-gray-500 font-bold">
            Mã OTP của bạn đã hết hạn{" "}
          </Text>
            <TouchableOpacity
            onPress={handleResendOTP}
            >
              <Text className="text-center text-blue-500 font-bold">
                Gửi lại OTP
              </Text>
            </TouchableOpacity>
         </View>
        )}

        <TouchableOpacity>
          <View className="rounded-md mt-6 p-4 bg-[#00CCBB]">
            <Text className="text-center text-white">Xác nhận</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;
