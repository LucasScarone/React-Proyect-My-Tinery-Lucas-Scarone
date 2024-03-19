import { createAction } from "@reduxjs/toolkit";


export const load = createAction( 'loadCity', (city) => {
    return {
        payload: city
    }
} )

export const filterXname = createAction("fil", (value)=>{
    return {
        payload : value
    }
})