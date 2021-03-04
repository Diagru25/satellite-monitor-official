import { createSlice } from '../../packages/core/adapters/redux-toolkit';

const positionSlice = createSlice({
    name: 'position',
    initialState: {
        point: [0, 0], //[21, 105]
        polyline: [
            [
                21.096870, 105.902530
            ],
            [
                21.092478, 105.723753
            ],
            [
                21.020201, 105.739145
            ],
            [21.054421, 106.074450]
        ]
    },
    reducers: {
        setPoint: (state, action) => {
            console.log(action.payload);
            state.point = action.payload;
        },
        addPoint: (state, action) => {
            console.log(action.payload);
            state.polyline.push(action.payload);
        }
    }
})

export const {
    setPoint,
    addPoint
} = positionSlice.actions;
export default positionSlice.reducer;