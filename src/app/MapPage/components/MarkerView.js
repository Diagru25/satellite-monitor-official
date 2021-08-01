import { Popup, Marker } from '../../packages/core/adapters/leaflet-map'
import L from 'leaflet'
import LCG from 'leaflet-control-geocoder' // Thư viện truy vấn ngược Địa điểm theo Tọa độ
import satellite from '../../Assets/Images/icons8-satellite-30.png'

import { useDispatch } from 'react-redux';
import { setCurrentSatellite, setListPosition } from '../../Redux/Position/PositionSlice';
import { getSatelliteInfo } from '../../Redux/Position';

const MarkerView = ({ index, position, detail }) => {
    // const geocoder = L.Control.Geocoder.nominatim();
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
        // console.log(geocoder.reverse(position))
    }

    return (
        <Marker position={position} icon={satelliteIcon}>
            <Popup><strong>{detail.name}</strong> <br />({position[0].toFixed(6)}, {position[1].toFixed(6)}) <br/> <button onClick={handleClick}>Xem chi tiết</button></Popup>
        </Marker>
    )
}

export default MarkerView;
