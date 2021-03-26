import './MapContent.css';

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCenter, addPoint } from '../../Redux/Position';

import { Map, TileLayer, Circle, CircleMarker, Popup } from '../../packages/core/adapters/leaflet-map';

import Polyline from 'react-leaflet-arrowheads';
import SearchMap from './SearchControl';
import Marker from './MarkerView';

const MapContent = (props) => {

    const mapRef = useRef();
    const dispatch = useDispatch();
    const { center, polyline, listPolyline } = useSelector(state => state.positionReducer);

    useEffect(() => {

        const map = mapRef.current;
        if (map !== null) {
            map.leafletElement.locate();
        }

        //console.log(polyline)

    }, [])
    //const SearchBar = withLeaflet(SearchMap);
    const handleClick = (e) => {
        console.log(e.latlng);

        dispatch(addPoint([e.latlng.lat, e.latlng.lng]));
        dispatch(setCenter([e.latlng.lat, e.latlng.lng]));
    }


    return (
        <div className='map-content-wrapper'>
            <Map ref={mapRef} center={center} zoom={10} onclick={handleClick} onlocationfound={e => dispatch(setCenter([e.latlng.lat, e.latlng.lng]))} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <SearchMap />

                {
                    [
                        [-0.62937, 110.90970],
                        [22.09327, 106.39133],
                        [25.87570, 105.56777],
                        [29.65547, 104.70627],
                        [33.43192, 103.79705],
                        [37.20419, 102.82786],
                        [40.97123, 101.78304]
                    ].map(coor => {
                        return <Circle center={coor} radius={50000} stroke={false} ></Circle>
                    })
                }
                {
                    [
                        [-0.62937, 110.90970],
                        [22.09327, 106.39133],
                        [25.87570, 105.56777],
                        [29.65547, 104.70627],
                        [33.43192, 103.79705],
                        [37.20419, 102.82786],
                        [40.97123, 101.78304]
                    ].map(coor => {

                        return <Marker position={coor}
                        />
                    })
                }
                <Polyline positions={[
                    [-0.62937, 110.90970],
                    [22.09327, 106.39133],
                    [25.87570, 105.56777],
                    [29.65547, 104.70627],
                    [33.43192, 103.79705],
                    [37.20419, 102.82786],
                    [40.97123, 101.78304]
                ]} arrowheads={{ size: '8px', fill: true, frequency: '5' }} />

                {/* listPolyline.map(element => {
                        
                        let coordinate = [];
                        element.coordinate.forEach(cor => coordinate.push([cor.lat, cor.long]))
                        console.log(element.name)
                        console.log(coordinate)
                        return <Polyline positions={coordinate} arrowheads={{ size: '5px', fill: true, frequency: 'allvertices' }} />
                    }) */}


            </Map>
        </div>

    );
}

export default MapContent;