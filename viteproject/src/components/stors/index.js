import { combineReducers,configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./storeUser";


const rootreducer= combineReducers({
    user:userReducer
} )

const store= configureStore({
    reducer:rootreducer

})
export default store