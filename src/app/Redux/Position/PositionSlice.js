import { createSlice } from '../../packages/core/adapters/redux-toolkit';

import { calculate_orbit } from './positionAction';


const positionSlice = createSlice({
    name: 'position',
    initialState: {
        center: [0, 0], //[21, 105]
        listSatellite: [],
        currentSatellite: {}
    },
    reducers: {
        setCenter: (state, action) => {
            //console.log(action.payload);
            state.center = action.payload;
        },
        addPoint: (state, action) => {
            //console.log(action.payload);
            state.polyline.push(action.payload);
        },
        setListPolyline: (state, action) => {
            state.listPolyline = [];

            action.payload.forEach(element => {
                state.listPolyline.push(element);
            });
        },
        setCurrentSatellite: (state, action) => {
            state.currentSatellite = {...action.payload}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(calculate_orbit.fulfilled, (state, action) => {
            state.listSatellite = action.payload.data;
            console.log('fulfilled', state.listSatellite);
        })
    }
})

export const {
    setCenter,
    addPoint,
    setListPolyline,
    setCurrentSatellite
} = positionSlice.actions;
export default positionSlice.reducer;