import { createSlice } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "search",
    initialState: {
        searchText: "",
        isLoading: false,
        error: null,
        filteredResults: [],
        sortType: "",
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
          
        },
        setSortType: (state, action) => {
            state.sortType = action.payload;
            console.log(state.sortType);
        },
    }
});
export const { setText, setLoading, setError,setFilteredResults,setSortType } = UserSlice.actions;
export default UserSlice.reducer;