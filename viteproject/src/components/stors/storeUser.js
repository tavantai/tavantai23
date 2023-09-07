import { createSlice } from "@reduxjs/toolkit";
import { createUserReducer, deleteUserReduces, getUserReduces} from "./action";


export const User_trangThai =  createSlice({
    name:"user",
    initialState:{
        data:[],
        pagination:{},
        loading:false,
        error:"",
    },
    extraReducers:(builder)=>{
        getUserReduces(builder);
        createUserReducer(builder);
        deleteUserReduces(builder);
		// updateUserReduces(builder)
    }
})

export const userReducer =User_trangThai.reducer