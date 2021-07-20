import './MapDetail.css';
import { useSelector } from 'react-redux';

const MapDetail = () => {

    const { currentSatellite } = useSelector(state => state.positionReducer)

    console.log('current: ', currentSatellite);
    return (
        <div className='map-detail-wrapper'>
            <h3>{currentSatellite.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '20px 20px 20px 50px' }}>
                <p><strong>Vĩ độ:</strong> {currentSatellite.lat}</p>
                <p><strong>Kinh độ:</strong> {currentSatellite.long}</p>
                <p><strong>Trvn:</strong> {currentSatellite.trvn}</p>
                <p><strong>Alt:</strong> {currentSatellite.alt}</p>
                <p><strong>Az:</strong> {currentSatellite.az}</p>
                <p><strong>elevation:</strong> {currentSatellite.elevation}</p>
                <p><strong>Range:</strong> {currentSatellite.range}</p>
            </div>
        </div>
    )
}

export default MapDetail;