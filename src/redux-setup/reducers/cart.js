import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[],
}


const cartReducer=createSlice(
    {
        name:"cartReducer",
        initialState,
        reducers:{
            addToCart:(state,action)=>{
                let isExistProduct =false;
                state.items.map((item)=>{
                      if(item._id===action.payload._id)
                        {
                            item.qty+=action.payload.qty;
                            isExistProduct=true;
                            return item;
                        }                         
                });
              if (!isExistProduct)  state.items.push(action.payload);
               
            },
            updateItemCart:(state,action)=>{
                state.items.map((item)=>{
                    if(item._id===action.payload._id)
                      {
                          item.qty =Number(action.payload.qty);
                          return item;
                      }                         
              });
            },
            deleteItemCart:(state,action)=>{
                state.items= state.items.filter((item)=>item._id!==action.payload._id);
                //Cập nhật lại state
                //Cấp phát store với state mới cho ứng dụng

            },
            clearCart:(state)=>{ state.items=[]}
        }
    }
);

export const {addToCart,updateItemCart,deleteItemCart}=cartReducer.actions;
export default cartReducer.reducer;