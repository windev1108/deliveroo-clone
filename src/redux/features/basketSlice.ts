import { createSlice } from "@reduxjs/toolkit";
import { DishModal } from "../../modal";
import type { PayloadAction } from "@reduxjs/toolkit";

export type BasketSlice = {
  items: Array<DishModal>;
}

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketSlice, action: PayloadAction<DishModal>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: BasketSlice, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id} as its not in basket)`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;


export const selectBasketItemsWithId = (state: any, id: string) =>
  state.basket.items.filter((item: DishModal) => item.id === id);

export const selectBasketTotal = (state: any) => state.basket.items.reduce((total : number , item : DishModal ) => 
  total + item.price , 0
)

export default basketSlice.reducer;
