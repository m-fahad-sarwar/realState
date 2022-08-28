import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {toast} from 'react-toastify'




const loginUser = createAsyncThunk(
    '/loginUser',
    async (data) => {
        try {

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, data)
            localStorage.setItem("TokenValue", response.data.token);
            toast(response.data.message)
            return response.data
        } catch (error) {
            alert(error)
        }

    }
)

const logOut = createAsyncThunk(
    '/logOut',
    async (data) => {
        localStorage.removeItem('TokenValue')

    }
)
const signUpUser = createAsyncThunk(
    '/signUpUser',
    async (data) => {
        try {

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, data)
            console.log('response', response.data);
            localStorage.setItem("TokenValue", response.data.token);
            toast(response.data.message)
            return response.data
        } catch (error) {
            alert(error)
        }

    }
)


const isLoginUser = createAsyncThunk(
    '/isLoginUser',
    async () => {
        try {

            const token = localStorage.getItem("TokenValue");
            if (!token) {
                return {
                    isUser: false,
                    data: []
                }
            } else if (token) {
                let data = {
                    token: token
                }

                const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/isUser`, data)
                if (response.data.data) {
                    return {
                        isUser: true,
                        data: response.data.data
                    }
                } else {

                    return {
                        isUser: false,
                        data: []
                    }
                }

            }
        } catch (error) {
            alert(error)
        }

    }
)
const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isUser: false,
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.token) {
                return {
                    isUser: true,
                    data: action.payload
                }
            }


        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            if (action.payload.token) {
                return {
                    isUser: true,
                    data: action.payload
                }
            }


        })
        builder.addCase(isLoginUser.fulfilled, (state, action) => {
            return action.payload

        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            return {
                isUser:false,
                data : []
            }

        })
    },

}

)

export { loginUser, isLoginUser ,signUpUser , logOut}
export default AuthSlice;