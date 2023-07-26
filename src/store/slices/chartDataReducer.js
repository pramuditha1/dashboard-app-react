import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "lodash";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

//fetch chart data from plygon api 
export const fetchChartData = createAsyncThunk(
    'chartData/fetch',
    async (dateRange) => {
        const apiKey = 'oqwsl9C0odCpad3e108FfNm79IgukZia';
        const { startDate, endDate } = dateRange;

        try {
            const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/NVDA/range/1/day/${startDate}/${endDate}?apiKey=${apiKey}`);
            return response.data.results;
        } catch (error) {
            throw new Error('Failed to fetch chart data.');
        }
    }
);

//chart data reducer slice
const chartDataSlice = createSlice({
    name: 'chartData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchChartData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChartData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchChartData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default chartDataSlice.reducer;

//chart data domain selected from redux store
const selectChartData = (state) => state.chartData;

//chart selectors. can use in any component/ container
export const selectChartDataLoading = createSelector(
    selectChartData,
    (chartData) => chartData.loading
);

export const selectChartDataError = createSelector(
    selectChartData,
    (chartData) => chartData.error
);

//chart details selector
export const selectChartDataItems = createSelector(
    selectChartData,
    (chartData) => chartData.data
);

//select open, high and low values
export const selectOpenHighValues = createSelector(
    selectChartData,
    (chartData) => {
        const highValues = [];
        const lowValues = [];
        const openValues = [];
        chartData.data.map(stockData => {
            highValues.push(get(stockData, 'h'))
            lowValues.push(get(stockData, 'l'))
            openValues.push(get(stockData, 'o'))
        })

        // Sort the array in descending order, Select the top five values using array slicing
        const sortedData = highValues.sort((a, b) => b - a);
        const topFiveValues = sortedData.slice(0, 5);

        return {
            highValues: highValues,
            lowValues: lowValues,
            openValues: openValues,
            topFiveHighValues: topFiveValues,
            maxHigh: Math.max(...highValues),
            maxLow: Math.max(...lowValues),
            maxOpen: Math.max(...openValues),
        }
    }
)