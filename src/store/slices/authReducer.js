import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
// import { PROD_ENV } from "../../utils/constants";

const initialState = {
    data: [],
    loading: false,
};

export const login = createAsyncThunk(
    'auth/login',
    async (loginDetails) => {
        const response = await axios.post('https://dummyjson.com/auth/login',
            {
                username: loginDetails.userName,
                password: loginDetails.password,
            }
            , {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        const authData = {
            isLoggedIn: response.data.token ? true : false,
            email: response.data.email,
            id: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            username: response.data.username,
        }

        // Store the token in a secure cookie
        if (response.data.token) {
            Cookies.set('token', response.data.token, { secure: true, sameSite: 'strict' });
        }

        return authData;
    }
);

const authDetailsSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            })
    },
});

export default authDetailsSlice.reducer;
