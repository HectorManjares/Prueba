import { createSlice } from '@reduxjs/toolkit';

export const modulesSlice = createSlice({
    name: 'modules',
    initialState: [],
    reducers:{

        addModules:( state, action )=>{
            return [...action.payload]
        }
    }   
})

export const { addModules } = modulesSlice.actions;

export default modulesSlice.reducer;
