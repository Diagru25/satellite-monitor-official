import { createAsyncThunk } from '../../packages/core/adapters/redux-toolkit';
import { calOrbit_all } from '../../packages/core/services/apis/satelliteOrbit';

const calculate_orbit = createAsyncThunk(
    'position/calOrbitAll',
    async (param, { dispatch, getState }) => {
        const center = getState().positionReducer;
        //console.log(center);
        const res = await calOrbit_all(param.lat, param.long, param.time_start, param.time_end);
        console.log(res);
        return 'test';
    }
)

export {
    calculate_orbit
}