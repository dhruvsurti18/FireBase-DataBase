import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase";
import { ref, push, set, get, remove, update } from "firebase/database";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const snapshot = await get(ref(db, "products"));
    const data = snapshot.val() || {};
    return Object.keys(data).map(id => ({ id, ...data[id] }));
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const newRef = push(ref(db, "products"));
    await set(newRef, product);
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await remove(ref(db, "products/" + id));
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }) => {
    await update(ref(db, "products/" + id), product);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
});

export default productSlice.reducer;
