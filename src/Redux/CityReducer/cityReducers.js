import { createReducer } from "@reduxjs/toolkit";
import { filterXname, load } from "../Actions/actions";



const initialState = {
    all: [],
    filtered: [],
    search: ""
}



const reducer = createReducer( initialState, ( builder ) => {
    builder.addCase(load,(state, action)=>{
        return {
            ...state,
            all : action.payload,
            filtered: action.payload
        }
    }).addCase(filterXname,(state, action )=>{
       const fil= state.all.filter((ct) => ct.name.trim().toLowerCase().startsWith(action.payload.trim().toLowerCase()))
        return{
            ...state,
            filtered : fil,
            search : action.payload
        }
    })
})

export default reducer