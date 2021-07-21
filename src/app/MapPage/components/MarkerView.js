import { Popup, Marker } from '../../packages/core/adapters/leaflet-map'
import L from 'leaflet'
import satellite from '../../Assets/Images/icons8-satellite-30.png'

import { useDispatch } from 'react-redux';
import { setCurrentSatellite, setListPosition } from '../../Redux/Position/PositionSlice';
import { getSatelliteInfo } from '../../Redux/Position';
const MarkerView = ({ index, position, detail }) => {
    const dispatch = useDispatch();
    const satelliteIcon = new L.Icon({
        iconUrl: satellite,
        iconRetinaUrl: satellite,
        popupAnchor: [-0, -0],
        iconSize: [32, 32],
        //className: 'leaflet-div-icon'
    })

    const handleClick = async () => {
        // console.log(detail.name)
        dispatch(setCurrentSatellite(detail))
        dispatch(setListPosition(index))
        dispatch(getSatelliteInfo(detail.id))
    }

    return (
        <Marker position={position} icon={satelliteIcon}>
            <Popup>{detail.name} Tọa độ: <br />{position[0]}, {position[1]} <br/> <button onClick={handleClick}>Xem chi tiết</button></Popup>
        </Marker>
    )
}

export default MarkerView;
