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

            },
            deleteItemCart:(state,action)=>{

            }
        }
    }
);

export const {addToCart,updateItemCart,deleteItemCart}=cartReducer.actions;
export default cartReducer.reducer;