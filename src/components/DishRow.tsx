import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC, useState } from "react";
import { DishModal } from "../modal/DishModal";
import Currency from "react-currency-formatter";
import { urlFor } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsWithId  } from "../redux/features/basketSlice";
import { RootState } from "../redux/store";


const DishRow: FC<DishModal> = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const items  = useSelector(state  => selectBasketItemsWithId(state, id));
  const [isPressed, setIsPressed] = useState(false);

  const handleAddItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const handleRemoveItemFromBasket = () => {
    if(!items.length) return;
    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
      >
        <View
          className={`flex-row p-4 bg-white border border-gray-200 ${
            isPressed && "border-b-0"
          }`}
        >
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              className="text-gray-400"
            >
              {description}
            </Text>
            <Text className="text-gray-400">
              <Currency quantity={price} currency={"USD"} />
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-20 h-20 bg-slate-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View>
          <View className="flex-row justify-center py-2 items-center space-x-2 center px-4">
            <TouchableOpacity
             onPress={handleRemoveItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity
                onPress={handleAddItemToBasket}
            >
              <PlusCircleIcon
                size={40}
                color={"#00CCBB"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
