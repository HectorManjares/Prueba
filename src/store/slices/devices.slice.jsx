import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getToken from '../../utils/getToken';
import { setIsLoading } from './isLoading.slice';

export const devicesSlice = createSlice({
    name: 'devices',
    initialState: [],
    reducers: {
        setDevices: (state, action) =>{
            return action.payload;
        }
    }
});

export const getDevicesThunk = (limite, search) => dispatch => {
    dispatch(setIsLoading(true));
    return axios.get(`https://api.dev.myintelli.net/v1/devices?limit=${limite}&offset=0&search=${search.join(',')}`, getToken())
        .then(res => dispatch(setDevices(res.data.data.results)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setDevices } = devicesSlice.actions;

export default devicesSlice.reducer;
