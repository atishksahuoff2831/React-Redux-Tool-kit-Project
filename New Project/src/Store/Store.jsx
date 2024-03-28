import { configureStore } from "@reduxjs/toolkit";
import { Reducers } from "./Reducers";
const Store = configureStore({
    reducer: {
        INC_DEC: Reducers
    }
})
export default Store;