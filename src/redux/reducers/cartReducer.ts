import { createSlice } from '@reduxjs/toolkit';

type ProductObject = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  key: number;
};

type InitialType = {
  fetchedCart: Array<ProductObject>;
};

const initialState: InitialType = {
  fetchedCart: [],
};

const cartReducer = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    setFetchedCart(state, action) {
      state.fetchedCart = action.payload;
    },

    changeFetchedCart(state, action) {
      state.fetchedCart = action.payload;
    },

    increaseProduct(state, action) {
      const index = state.fetchedCart.findIndex((item) => item.id === action.payload.id);

      state.fetchedCart[index].quantity += 1;
    },

    decreaseProduct(state, action) {
      const index = state.fetchedCart.findIndex((item) => item.id === action.payload.id);
      state.fetchedCart[index].quantity -= 1;

      state.fetchedCart = state.fetchedCart.filter((item) => item.quantity > 0);
    },

    buyProducts(state) {
      state.fetchedCart = [];
    },

    addToCart(state, action) {
      const index = state.fetchedCart.findIndex((item) => item.id === action.payload.id);

      if (index >= 0) state.fetchedCart[index].quantity += 1;
      else state.fetchedCart.push({ ...action.payload, quantity: 1 });
    },
  },
});

export default cartReducer.reducer;
export const {
  setFetchedCart,
  changeFetchedCart,
  increaseProduct,
  decreaseProduct,
  buyProducts,
  addToCart,
} = cartReducer.actions;
