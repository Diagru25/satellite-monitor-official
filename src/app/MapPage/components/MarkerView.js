import { Popup, Marker } from '../../packages/core/adapters/leaflet-map'
import L from 'leaflet'
import satellite from '../../Assets/Images/icons8-satellite-30.png'



const MarkerView = ({ position, detail }) => {

    const satelliteIcon = new L.Icon({
        iconUrl: satellite,
        iconRetinaUrl: satellite,
        popupAnchor: [-0, -0],
        iconSize: [32, 32],
        //className: 'leaflet-div-icon'
    })
    return (
        <Marker position={[position[0],position[1]]} icon={satelliteIcon} >
            <Popup>{position[2]['Official Name']}</Popup>
        </Marker>
    )
}

export default MarkerView;
