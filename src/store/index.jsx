import { configureStore } from '@reduxjs/toolkit'

import devicesSlice from './slices/devices.slice'
import isLoadingSlice from './slices/isLoading.slice'
import modulesSlice from './slices/modules.slice'

const store = configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        devices: devicesSlice,
        modules: modulesSlice
    }
})

export default store;