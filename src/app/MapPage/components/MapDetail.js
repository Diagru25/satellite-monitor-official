import './MapDetail.css';
import { useSelector } from 'react-redux';
import OneSateOfSatellite from './OneSateOfSatellite';
const MapDetail = () => {

    const { currentSatellite, listPosition } = useSelector(state => state.positionReducer)

    console.log('current: ', currentSatellite);
    return (
        <div className='map-detail-wrapper'>
            <h3>Satellite: {currentSatellite.detail.name} - <strong>{currentSatellite.detail.trvn}</strong></h3>
            <table>
                <tbody>
                    <tr>
                        <td><strong>NORAD Number:</strong></td>
                        <td>{currentSatellite.detail.id}</td>
                        <td><strong>Thời gian:</strong></td>
                        <td>{currentSatellite.detail.trvn}</td>
                        <td><strong>Vĩ độ:</strong></td>
                        <td>{currentSatellite.detail.lat.toFixed(6)}</td>
                        <td><strong>Kinh độ:</strong></td>
                        <td>{currentSatellite.detail.long.toFixed(6)}</td>
                    </tr>
                    <tr>
                        <td><strong>Alt:</strong></td>
                        <td>{Number.parseFloat(currentSatellite.detail.alt).toExponential(4)}</td>
                        <td><strong>Az:</strong></td>
                        <td>{currentSatellite.detail.az.toFixed(6)}</td>
                        <td><strong>Độ cao:</strong></td>
                        <td>{currentSatellite.detail.elevation}</td>
                        <td><strong>Phạm vi:</strong></td>
                        <td>{currentSatellite.detail.range}</td>
                    </tr>
                    <tr>
                        <td><strong>Date of Launch:</strong></td>
                        <td>{currentSatellite.info["Date of Launch"]}</td>
                        <td><strong>Expected Lifetime (yrs):</strong></td>
                        <td>{currentSatellite.info["Expected Lifetime (yrs)"]}</td>
                        <td><strong>Equipment:</strong></td>
                        <td>{currentSatellite.info["Equipment"]}</td>
                        <td><strong>Describe:</strong></td>
                        <td>{currentSatellite.info["Describe"]}</td>
                    </tr>
                    <tr>
                        <td><strong>Official Name:</strong></td>
                        <td>{currentSatellite.info["Official Name"]}</td>
                        <td><strong>Nation:</strong></td>
                        <td>{currentSatellite.info["Nation"]}</td>
                        <td><strong>Operator:</strong></td>
                        <td>{currentSatellite.info["Operator"]}</td>
                        <td><strong>Users:</strong></td>
                        <td>{currentSatellite.info["Users"]}</td>
                    </tr>
                    <tr>
                        <td><strong>Application:</strong></td>
                        <td>{currentSatellite.info["Application"]}</td>
                        <td><strong>Detailed Purpose:</strong></td>
                        <td>{currentSatellite.info["Detailed Purpose"]}</td>
                        <td><strong>Orbit:</strong></td>
                        <td>{currentSatellite.info["Orbit"]}</td>
                        <td><strong>Class of Orbit:</strong></td>
                        <td>{currentSatellite.info["Class of Orbit"]}</td>
                    </tr>                    
                    <tr>
                        <td><strong>Type of Orbit:</strong></td>
                        <td>{currentSatellite.info["Type of Orbit"]}</td>
                        <td><strong>Period (minutes):</strong></td>
                        <td>{currentSatellite.info["Period (minutes)"]}</td>
                        <td><strong>Mass (kg):</strong></td>
                        <td>{currentSatellite.info["Mass (kg)"]}</td>
                        <td><strong>COSPAR Number:</strong></td>
                        <td>{currentSatellite.info["COSPAR Number"]}</td>
                    </tr>
                </tbody>
            </table>
            <h3>5 Trạng thái gần nhất của vệ tinh {currentSatellite.detail.name}</h3>
            <table>
            <tbody>
            <tr>
                <td><strong>Thời gian</strong></td>
                <td><strong>Vĩ độ</strong></td>
                <td><strong>Kinh độ</strong></td>
                <td><strong>Alt</strong></td>
                <td><strong>Az</strong></td>
                <td><strong>Độ cao</strong></td>
                <td><strong>Phạm vi</strong></td>
            </tr>
            {
                listPosition.map((item, index) => <OneSateOfSatellite item={item} />)
            }
            </tbody>
            </table>
        </div>
    )
}

export default MapDetail;