import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import axios from 'axios'
const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/getProducts`)
            return response.data
        } catch (error) {
            alert(error)
        }

    }
)
const addProduct = createAsyncThunk(
    'addProduct',
    async (data) => {
        try {

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/products/createProduct`, data)
            toast('Sucessfully Added')
            return response.data.data
        } catch (error) {
            alert(error)
        }

    }
)

const ProudctsSlice = createSlice({

    name: 'products',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload

        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            let newProduct = [...state.data, action.payload]
            return {
                ...state,
                data: newProduct,
            }

        })
        
    }



}

)
export { fetchProducts ,addProduct }
export default ProudctsSlice