import './MapContent.css';

import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCenter, addPoint } from '../../Redux/Position';

import { Map, TileLayer, Circle, CircleMarker, Popup } from '../../packages/core/adapters/leaflet-map';

import Polyline from 'react-leaflet-arrowheads';
import SearchMap from './SearchControl';
import Marker from './MarkerView';

import MapDetail from './MapDetail';
const MapContent = (props) => {

    const mapRef = useRef();
    const dispatch = useDispatch();
    const { center, polyline, listPolyline, listSatellite, listCoordinate } = useSelector(state => state.positionReducer);
    const [detail, setDetail] = useState(0);
    const [markers, setMarkers] = useState([]);

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

    const handleMarkerClick = (itemDetail, e) => {
        console.log("show item detail: ", itemDetail);
        //setDetail(coor);
    }

    const renderSatellite = () => {
        const cloneMarker = [];
        for (let i in listSatellite) {
            for (let k in listSatellite[i].coordinate){
                cloneMarker.push(<Marker detail={[listSatellite[i].coordinate[k].lat, listSatellite[i].coordinate[k].long]} handleMarkerClick={(e) => handleMarkerClick(listSatellite[i].coordinate[k], e)} />);
            }
            //setMarkers(cloneMarker);
            console.log(cloneMarker);
            //renderMarker(listSatellite[i].coordinate);
            //renderCircle(listSatellite[i].coordinate);
            //renderPolyline(listSatellite[i].coordinate);
        }
    }
    // const renderMarker = (coordinate) => {
            
            
    // };
    // const renderCircle = (coordinate) => {
    //     return coordinate.map((item) => <Circle center={[item.lat, item.long]} radius={item.radius ? item.radius : 50000} stroke={false} ></Circle>)
    // };
    // const renderPolyline = (coordinate) => {
    //     return <Polyline positions={coordinate.map(item => [item.lat, item.long])} arrowheads={{ size: '8px', fill: true, frequency: '5' }} />
    // };

    return (
        <div className='map-wrapper' >
            <div className='map-content-wrapper'>
                <Map ref={mapRef} center={center} zoom={10} onclick={handleClick} onlocationfound={e => dispatch(setCenter([e.latlng.lat, e.latlng.lng]))} >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <SearchMap />
                    {listCoordinate.map((item, index) => <Marker key={index} detail={item} handleMarkerClick={(e) => handleMarkerClick(item, e)}/>)}
                    {/* {
                        //add radius
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
                        //add marker
                        [
                            [-0.62937, 110.90970,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}],
                            [22.09327, 106.39133,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}],
                            [25.87570, 105.56777,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}],
                            [29.65547, 104.70627,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}],
                            [33.43192, 103.79705,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}],
                            [37.20419, 102.82786,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}],
                            [40.97123, 101.78304,{"_id": {"$oid": "60eab889b595893560261894"}, "Official Name": "1HOPSAT", "NORAD Number": "44859", "Nation": "USA", "Operator": "Hera Systems", "Users": "Commercial", "Application": "Earth Observation", "Detailed Purpose": "Technology Development", "Orbit": "566km \ufffd 576km, 36.9\ufffd", "Class of Orbit": "LEO", "Type of Orbit": "Non-Polar Inclined", "Period (minutes)": "96.08", "Mass (kg)": "22", "International Designator": "", "Date of Launch": "11/12/2019", "Expected Lifetime (yrs)": "0.5", "Equipment": "", "Describe": "Pathfinder for planned earth observation constellation."}]
                        ].map(coor => {

                            return <Marker detail={coor} handleMarkerClick={(e) => handleMarkerClick(coor, e)}
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
                    ]} arrowheads={{ size: '8px', fill: true, frequency: '5' }} /> */}

                    {/* listPolyline.map(element => {
                            
                            let coordinate = [];
                            element.coordinate.forEach(cor => coordinate.push([cor.lat, cor.long]))
                            console.log(element.name)
                            console.log(coordinate)
                            return <Polyline positions={coordinate} arrowheads={{ size: '5px', fill: true, frequency: 'allvertices' }} />
                        }) */}
                </Map>
            </div>
            <div className='map-detail-wrapper'>
                {
                    // display Map Detail
                    detail != [] ?
                        <MapDetail detail={detail}
                        />
                        :
                        <div></div>
                }
            </div>
        </div>

    );
}

export default MapContent;