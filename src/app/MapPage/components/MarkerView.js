import { Popup, Marker } from '../../packages/core/adapters/leaflet-map'
import L from 'leaflet'
import satellite from '../../Assets/Images/icons8-satellite-30.png'

import { useDispatch } from 'react-redux';
import { setCurrentSatellite } from '../../Redux/Position/PositionSlice';

const MarkerView = ({ position, detail }) => {
    const dispatch = useDispatch();
    const satelliteIcon = new L.Icon({
        iconUrl: satellite,
        iconRetinaUrl: satellite,
        popupAnchor: [-0, -0],
        iconSize: [32, 32],
        //className: 'leaflet-div-icon'
    })

    const handleClick = () => {
        console.log('click')
        dispatch(setCurrentSatellite(detail))
    }

    return (
        <Marker position={position} icon={satelliteIcon}>
            <Popup>Vị trí: <br />{position[0]}, {position[1]} <br/> <button onClick={handleClick}>Xem chi tiết</button></Popup>
        </Marker>
    )
}

export default MarkerView;
