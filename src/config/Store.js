import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../store/AuthSlice";
import ProudctsSlice from "../store/ProductsSlice";
import SearchSlice from "../store/SearchSlice";


const reducer = {
    auth: AuthSlice.reducer,
    products: ProudctsSlice.reducer,
    search: SearchSlice.reducer

};

const Store = configureStore(
{reducer}
);

export default Store;