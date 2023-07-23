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
        let authData = {}
        await axios.post('https://dummyjson.com/auth/login',
            {
                username: loginDetails.userName,
                password: loginDetails.password,
            }
            , {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((data) => {
                // Store the token in a secure cookie
                const loginData = data.data
                if (loginData.token) {
                    Cookies.set('token', loginData.token, { secure: true, sameSite: 'strict' });
                    authData = {
                        isLoggedIn: loginData.token ? true : false,
                        email: loginData.email,
                        id: loginData.id,
                        firstName: loginData.firstName,
                        lastName: loginData.lastName,
                        username: loginData.username,
                    }
                }
            }).catch((err) => {
                Cookies.remove('token')
                authData = {
                    error: err.message
                }
            });
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
                if (!action.payload.error) {
                    state.data = action.payload;
                    state.loading = false;
                    state.error = "";
                } else {
                    state.data = {};
                    state.loading = false;
                    state.error = action.payload.error;
                }
            })
            .addCase(login.rejected, (state) => {
                state.loading = false;
            })
    },
});

export default authDetailsSlice.reducer;
