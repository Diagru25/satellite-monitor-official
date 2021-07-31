import './MapContent.css';

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPredictPoint, setCenter} from '../../Redux/Position';

import { Map, TileLayer } from '../../packages/core/adapters/leaflet-map';

import SearchMap from './SearchControl';
import OneSatelliteOnMap from './OneSatelliteOnMap';

const MapContent = (props) => {

    const mapRef = useRef();
    const dispatch = useDispatch();

    const { center, listSatellite } = useSelector(state => state.positionReducer);

    useEffect(() => {
        const map = mapRef.current;
        if (map !== null) {
            map.leafletElement.locate();
        }
    }, [])
    //const SearchBar = withLeaflet(SearchMap);
    const handleClick = (e) => {
        // console.log(e.latlng);
        //dispatch(addPoint([e.latlng.lat, e.latlng.lng]));
        dispatch(setPredictPoint([e.latlng.lat, e.latlng.lng]));
    }

    return (
        <div className='map-content-wrapper'>
            <Map ref={mapRef} center={center} zoom={10} onclick={handleClick}  >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <SearchMap />
                
                {
                    listSatellite.map((item, index) => <OneSatelliteOnMap key={index} coordinate={item.coordinate} name={item.name} num={index}/>)
                }
            </Map>
        </div>

    );
}

export default MapContent;