import { createSlice } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "search",
    initialState: {
        searchText: "",
        isLoading: false,
        error: null,
        filteredResults: [],
    },
    reducers: {
        setText: (state, action) => {
            state.searchText = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setFilteredResults: (state, action) => {
            state.filteredResults = action.payload;
            console.log("filteredResults",state.filteredResults);
        }
    }
});
export const { setText, setLoading, setError,setFilteredResults } = UserSlice.actions;
export default UserSlice.reducer;