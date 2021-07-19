import { Circle } from '../../packages/core/adapters/leaflet-map';

import Polyline from 'react-leaflet-arrowheads';
import Marker from './MarkerView';

const OneSatelliteOnMap = ({ coordinate, name }) => {

    return (
        <>
            {
                coordinate.map((item, index) =>
                    <>
                        <Marker key={`marker ${index}`} position={[item.lat, item.long]} detail={{...item, name: name}}/>
                        <Circle key={`circle ${index}`} center={[item.lat, item.long]} radius={item.radius ? item.radius : 50000} stroke={false} />
                    </>

                )
            }
            <Polyline
                key={Math.random()}
                positions={coordinate.map(item => [item.lat, item.long])}
                arrowheads={{ size: '5px', fill: true, frequency: 'allvertices' }}
            />
        </>
    );
};

export default OneSatelliteOnMap;