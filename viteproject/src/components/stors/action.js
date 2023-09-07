import { createAsyncThunk } from "@reduxjs/toolkit";
import { Apilits, add_user, deleteUser } from "../apiUser/auth";
// import { Apilits, UpdateUser, add_user, deleteUser } from "../../apiuSer/auth";



 export const newuser = createAsyncThunk('/user/createUser',async({data, class_id, family_id, genus_id,kingdom_id,order_id,phylum_id,sach_dos,iucns 
 })=>{
  try {
    const response = add_user(data, class_id, family_id, genus_id,kingdom_id,order_id,phylum_id,sach_dos,iucns );
    return response;
  } catch (error) {
    alert("Dữ liệu không thỏa mãn hoặc đã tồn tại trong hệ thống")
    return error;
  }
 })

 export  const  createUserReducer = (builder)=>{
       builder
       .addCase( newuser.pending,(state)=>{
        state.loading=true;
        state.error=null;
       })
       .addCase(newuser.fulfilled,(state,action)=>{
        state.loading=False;
        state.data=action.payload;
        state.error=null;
       } )
       .addCase(newuser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
       })
 }


 


 export const deleteUserAction = createAsyncThunk('user/deleteUser', async ({ id }) => {
	try {
		const response = deleteUser(id);
		return response;
	} catch (error) {
		return error;
	}
});

export const deleteUserReduces = (builder) => {
	builder
		.addCase(deleteUserAction.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(deleteUserAction.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		})
		.addCase(deleteUserAction.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
}








export const UpdateUserAction = createAsyncThunk('user/updateUser', async ({ id, data, role_ids,group_id }) => {
	try {
		const response = UpdateUser(id, data, role_ids,group_id);
		return response;
	} catch (error) {
		alert("Cập Nhật Dữ liệu Người Dùng không thành công . Vui lòng kiểm tra lại");
		return error;
	}
});

export const updateUserReduces = (builder) => {
	builder
		.addCase(UpdateUserAction.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(UpdateUserAction.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		})
		.addCase(UpdateUserAction.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
}


export const getUserAction= createAsyncThunk("/renderTable",async({page, search, perpage})=>{
	try{
		 const response =await Apilits(page, search, perpage);
		 return response;
	}
	catch(error){
		throw error;
		}
	 }
)

export const getUserReduces =(builder)=>{
	builder
		.addCase(getUserAction.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(getUserAction.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload.list;
			state.pagination= action.payload.pagination;
			state.error = null;
		})
		.addCase(getUserAction.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
}

 