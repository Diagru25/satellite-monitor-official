import './MapContent.css';

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPoint, addPoint } from '../../Redux/Position';

import { Map, Marker, Popup, TileLayer, withLeaflet } from '../../packages/core/adapters/leaflet-map';

import Polyline from 'react-leaflet-arrowheads';
import SearchMap from './SearchControl';


const MapContent = (props) => {
    const mapRef = useRef();
    const dispatch = useDispatch();
    const { point, polyline } = useSelector(state => state.positionReducer);

    useEffect(() => {

        const map = mapRef.current;
        if (map !== null) {
            map.leafletElement.locate();
        }

    }, [])
    //const SearchBar = withLeaflet(SearchMap);
    const handleClick = (e) => {
        console.log(e.latlng);

        dispatch(addPoint([e.latlng.lat, e.latlng.lng]));
        dispatch(setPoint([e.latlng.lat, e.latlng.lng]));
    }


    return (
        <div className='map-content-wrapper'>
            <Map ref={mapRef} center={point} zoom={10} onclick={handleClick} onlocationfound={e => dispatch(setPoint([e.latlng.lat, e.latlng.lng]))} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <SearchMap />
                <Marker position={point}>
                    <Popup>Your location: <br />{point[0]}, {point[1]}</Popup>
                </Marker>
                <Polyline positions={polyline} arrowheads={{ size: '10px', fill: true, frequency: 'allvertices' }} />
            </Map>
        </div>

    );
}

export default MapContent;