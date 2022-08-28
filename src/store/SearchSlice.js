import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
import axios from 'axios'
const onSearch = createAsyncThunk(
    'onSearch',
    async (data) => {
        try {

            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/searchProduct/${data.item}`)
            return response.data


        } catch (error) {
            alert(error)
        }

    }
)


const SearchSlice = createSlice({

    name: 'search',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(onSearch.fulfilled, (state, action) => {
            return action.payload

        })
        
    }



}

)
export { onSearch  }
export default SearchSlice