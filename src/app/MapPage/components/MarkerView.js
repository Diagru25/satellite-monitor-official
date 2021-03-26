import { Popup, Marker } from '../../packages/core/adapters/leaflet-map'
import L from 'leaflet'
import satellite from '../../Assets/Images/icons8-satellite-30.png'



const MarkerView = ({ position }) => {

    const satelliteIcon = new L.Icon({
        iconUrl: satellite,
        iconRetinaUrl: satellite,
        popupAnchor: [-0, -0],
        iconSize: [32, 32],
        //className: 'leaflet-div-icon'
    })
    return (
        <Marker position={position} icon={satelliteIcon}>
            <Popup>Your location: <br />{position[0]}, {position[1]}</Popup>
        </Marker>
    )
}

export default MarkerView;
