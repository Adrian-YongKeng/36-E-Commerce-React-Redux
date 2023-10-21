import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //check if item is already in the cart
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        //if item exists inthecart, increment
        state[itemIndex].amount += 1;
      } else {
        const newProduct = { ...action.payload, amount: 1 };
        console.log(newProduct);
        state.push(newProduct);
      }
    },
    //cartitem
    deleteFromCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1); // Remove the item from the cart
      }
    },
    incrementItem: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[itemIndex].amount += 1;
    },
    decrementItem: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state[itemIndex].amount > 1) {
        state[itemIndex].amount -= 1; // Decrement item quantity, but ensure it's not below 1
      } else {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;