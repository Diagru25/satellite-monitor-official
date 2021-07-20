import { createSlice } from '../../packages/core/adapters/redux-toolkit';

import { calculate_orbit, getSatelliteInfo } from './positionAction';


const positionSlice = createSlice({
    name: 'position',
    initialState: {
        center: [0, 0], //[21, 105]
        listSatellite: [],
        currentSatellite: {'detail':{},'info':{}},
        listPosition:{},
        totalSatellite: 0
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
            state.currentSatellite.detail = {...action.payload}
            // console.log(state.currentSatellite.detail);
        },
        setListPosition: (state, action) => {
            state.listPosition = state.listSatellite[action.payload]
            // console.log(state.currentSatellite.detail);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(calculate_orbit.fulfilled, (state, action) => {
            state.listSatellite = action.payload.data;
            state.totalSatellite = state.listSatellite.length;
            // console.log('fulfilled', state.listSatellite);
        })
        builder.addCase(getSatelliteInfo.fulfilled, (state, action) => {
            state.currentSatellite.info = action.payload.data;
            // console.log('fulfilled', state.currentSatellite.info);
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