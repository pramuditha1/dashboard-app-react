import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { restClient} from "@polygon.io/client-js";
// import { PROD_ENV } from "../../utils/constants";

const initialState = {
    data: [],
    loading: false,
};

const rest = restClient("oqwsl9C0odCpad3e108FfNm79IgukZia");

export const getChartData = createAsyncThunk(
    'chart/getData',
    async () => {
        await rest.stocks.aggregates("AAPL", 1, "day", "2023-04-14", "2023-04-14").then((data) => {
            console.log("====", data);
        }).catch(e => {
            console.error('==== An error happened:', e);
        });
        // return authData;
    }
);

// const authDetailsSlice = createSlice({
//     name: 'userInfo',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 if (!action.payload.error) {
//                     state.data = action.payload;
//                     state.loading = false;
//                     state.error = "";
//                 } else {
//                     state.data = {};
//                     state.loading = false;
//                     state.error = action.payload.error;
//                 }
//             })
//             .addCase(login.rejected, (state) => {
//                 state.loading = false;
//             })
//     },
// });

// export default authDetailsSlice.reducer;
