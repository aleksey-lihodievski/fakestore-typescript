import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateProduct, getAllProducts, deleteProduct, addProduct } from 'http-requests';

type ActiveProductType = {
  _id: number | undefined;
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  image: string | undefined;
  category: string | undefined;
};

type AddEditType = {
  _id?: number;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

type InitialType = {
  adminProducts: Array<AddEditType>;
  activeProduct: ActiveProductType;
};

const initialState: InitialType = {
  adminProducts: [],
  activeProduct: {
    _id: undefined,
    id: undefined,
    title: undefined,
    price: undefined,
    description: undefined,
    image: undefined,
    category: undefined,
  },
};

export const update = createAsyncThunk(
  'Products/updateProducts',
  async (data: AddEditType): Promise<AddEditType> => {
    const res = await updateProduct(data);
    return res.data;
  },
);

export const deleteAdminProduct = createAsyncThunk(
  'Products/deleteProduct',
  async (data: { id: number }) => {
    if (data.id >= 1 && data.id <= 20) {
      const res = await deleteProduct(data.id);
      return res.data;
    }
    return { id: data.id };
  },
);

export const setAdminProducts = createAsyncThunk('Products/getProducts', async () => {
  const res = await getAllProducts();
  return res.data;
});

export const addAdminProduct = createAsyncThunk(
  'Products/addProduct',
  async (data: AddEditType) => {
    const res = await addProduct(data);
    return res.data;
  },
);

const adminProductsReducer = createSlice({
  name: 'AdminProducts',
  initialState,
  reducers: {
    changeAdminProducts(state, action) {
      state.adminProducts = action.payload;
    },
    setActiveProduct(state, action) {
      state.activeProduct = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(update.fulfilled, (state, action) => {
      state.adminProducts = state.adminProducts.map((product: AddEditType) => {
        if (product.id == action.payload.id) {
          return {
            ...action.payload,
            id: Number(action.payload.id),
            _id: action.payload._id,
          };
        }
        return product;
      });
    });

    builder.addCase(setAdminProducts.fulfilled, (state, action) => {
      state.adminProducts = action.payload.map((product: AddEditType) => {
        return { ...product, _id: product.id };
      });
    });

    builder.addCase(deleteAdminProduct.fulfilled, (state, action) => {
      state.adminProducts = state.adminProducts.filter(
        (product) => product.id != action.payload.id,
      );
    });

    builder.addCase(addAdminProduct.fulfilled, (state, action) => {
      state.adminProducts.push({
        ...action.payload,
        id: state.adminProducts[state.adminProducts.length - 1].id,
      });
    });
  },
});

export default adminProductsReducer.reducer;
export const { changeAdminProducts, setActiveProduct } = adminProductsReducer.actions;
