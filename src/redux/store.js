import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

 const store = configureStore({
    reducer: {
        search: UserSlice,
    },

});
export default store;
