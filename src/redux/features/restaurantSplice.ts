import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModal } from "../../modal";


export type RestaurantSlice = {
    restaurants:  RestaurantModal ;
  }
  
const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
        long: null,
        lat: null,
    }
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state , action )  => {
        state.restaurant = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;


export default restaurantSlice.reducer;
