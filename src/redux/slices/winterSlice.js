import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import productApi from "../apis/productApi";


// export const fetchAsyncProducts = createAsyncThunk(
//     "movies/fetchAsyncMovies",
//     async () => {
//       const response = await productApi.get();
//       console.log(response.data)
//       return response.data;
//     }
//   );

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (dispatch, getState) => {
    return await fetch("https://glacial-dusk-25869.herokuapp.com/allProducts").then(
      (res) => res.json()
    );
  }
);

// export const productDetail = createAsyncThunk(
//   "products/productDetail",
//   async (productId) => {
//     return await fetch("http://localhost:5000/singleProduct/{productId}").then(
//     (res)=> res.json()
//     );
//   }
// );


  const winterSlice = createSlice({
    name: "product",
    initialState: {
      products: [],
      status: null,
    },
    extraReducers: {
      [getProducts.pending]: (state, action) => {
        state.status = "loading";
      },
      [getProducts.fulfilled]: (state, action) => {
        state.status = "success";
        state.users = action.payload;
      },
      [getProducts.rejected]: (state, action) => {
        state.status = "failed";
      },
      // [productDetail.fulfilled]: (state, action) => {
      //   state.status = "success";
      //   state.users = action.payload;
      // },
    },
  });
  
  export const { addProducts } = winterSlice.actions;
  export const getAllMovies = (state) => state.products.products;
  export default winterSlice.reducer;