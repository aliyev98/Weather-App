import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: {},
    status: null,
    error: null
}

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (location) => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=4&aqi=yes&alerts=yes`);
        return response.data
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
        });
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})


export default weatherSlice.reducer