import { createSlice } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "search",
    initialState: {
        searchText: "",
        isLoading: false,
        error: null,
        filteredResults: [],
        sortType: "",
        page:1
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
        //isme göre sırala artan
        if (state.sortType && state.sortType === "NameAsc") {
            state.filteredResults.sort((a, b) => {
                return a.Name.localeCompare(b.Name)
            })
        }
        //isme göre sırala azalan
        if (state.sortType && state.sortType === "NameDesc") {
            state.filteredResults.sort((a, b) => {
                return b.Name.localeCompare(a.Name)
            })
        }
        // tarihe göre sırala artan
        if (state.sortType && state.sortType === "YearAsc") {
            state.filteredResults.sort((a, b) => {
                return parseInt(a.Date.YY) - parseInt(b.Date.YY);
            })
        }
        // tarihe göre sırala azalan
        if (state.sortType && state.sortType === "YearDesc") {
            state.filteredResults.sort((a, b) => {
                return parseInt(b.Date.YY) - parseInt(a.Date.YY);
            })
            
        }
        },
        setPage: (state, action) => {
            state.page = action.payload;
            console.log(state.page)
        }
        
    }
});
export const { setText, setLoading, setError,setFilteredResults,setSortType,setPage } = UserSlice.actions;
export default UserSlice.reducer;