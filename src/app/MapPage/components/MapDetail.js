import './MapDetail.css';
import { useSelector } from 'react-redux';

const MapDetail = () => {

    const { currentSatellite } = useSelector(state => state.positionReducer)

    console.log('current: ', currentSatellite);
    return (
        <div className='map-detail-wrapper'>
            <h3>{currentSatellite.detail.name}</h3>
            <div className='flex-container'>
                <div>
                    <p><strong>Norad ID:</strong> {currentSatellite.detail.id}</p>
                    <p><strong>Vĩ độ:</strong> {currentSatellite.detail.lat}</p>
                    <p><strong>Kinh độ:</strong> {currentSatellite.detail.long}</p>
                    <p><strong>Trvn:</strong> {currentSatellite.detail.trvn}</p>
                    <p><strong>Alt:</strong> {currentSatellite.detail.alt}</p>
                    <p><strong>Az:</strong> {currentSatellite.detail.az}</p>
                    <p><strong>Độ cao:</strong> {currentSatellite.detail.elevation}</p>
                    <p><strong>Phạm vi:</strong> {currentSatellite.detail.range}</p>
                    <p><strong>Date of Launch:</strong> {currentSatellite.info["Date of Launch"]}</p>
                    <p><strong>Expected Lifetime (yrs):</strong> {currentSatellite.info["Expected Lifetime (yrs)"]}</p>
                    <p><strong>Equipment:</strong> {currentSatellite.info["Equipment"]}</p>
                    <p><strong>Describe:</strong> {currentSatellite.info["Describe"]}</p>
                </div>
                <div>
                    <p><strong>Official Name:</strong> {currentSatellite.info["Official Name"]}</p>
                {/* <p><strong>NORAD Number:</strong> {currentSatellite.info["NORAD Number"]}</p> */}
                    <p><strong>Nation:</strong> {currentSatellite.info["Nation"]}</p>
                    <p><strong>Operator:</strong> {currentSatellite.info["Operator"]}</p>
                    <p><strong>Users:</strong> {currentSatellite.info["Users"]}</p>
                    <p><strong>Application:</strong> {currentSatellite.info["Application"]}</p>
                    <p><strong>Detailed Purpose:</strong> {currentSatellite.info["Detailed Purpose"]}</p>
                    <p><strong>Orbit:</strong> {currentSatellite.info["Orbit"]}</p>
                    <p><strong>Class of Orbit:</strong> {currentSatellite.info["Class of Orbit"]}</p>
                    <p><strong>Type of Orbit:</strong> {currentSatellite.info["Type of Orbit"]}</p>
                    <p><strong>Period (minutes):</strong> {currentSatellite.info["Period (minutes)"]}</p>
                    <p><strong>Mass (kg):</strong> {currentSatellite.info["Mass (kg)"]}</p>
                    <p><strong>COSPAR Number:</strong> {currentSatellite.info["COSPAR Number"]}</p>
                    
                </div>
            </div>
            <div className='flex-container'>
            </div>
        </div>
    )
}

export default MapDetail;