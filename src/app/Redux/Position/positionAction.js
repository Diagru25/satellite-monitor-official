import { createAsyncThunk } from '../../packages/core/adapters/redux-toolkit';
import { calOrbit_all } from '../../packages/core/services/apis/satelliteOrbit';

const calculate_orbit = createAsyncThunk(
    'position/calOrbitAll',
    async (param, { dispatch, getState }) => {
        const center = getState().positionReducer;
        const res = await calOrbit_all(param.lat, param.long, param.time_start, param.time_end);
        const clone = x(res);
        console.log(clone);
        return {data: res, listCoordinate: clone};
    }
)

const x = (data) => {

    let temp = [];
    for(let i in data) {
        for(let k in data[i].coordinate) {
            temp.push([data[i].coordinate[k].lat, data[i].coordinate[k].long]);
        }
    }

    return temp;
}

export {
    calculate_orbit
}