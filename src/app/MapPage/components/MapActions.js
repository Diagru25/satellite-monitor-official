import './MapActions.css';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DatePicker, Input, Button, Form } from '../../packages/core/adapters/ant-design';

import { setPoint } from '../../Redux/Position';


const MapActions = () => {

    const dispatch = useDispatch();
    const { point } = useSelector(state => state.positionReducer);

    const [position, setPosition] = useState({ lat: '', lng: '' });


    const handleMove = () => {

        if (position.lat === '' || position.lng === '')
            return;

        let arr = [];
        arr.push(Number(position.lat));
        arr.push(Number(position.lng));

        dispatch(setPoint(arr));
    }

    const handleOnChange = (value, dateString) => {
        console.log(value);
    }

    const handleOnChangeRange = (value, dateString) => {
        console.log(value);
    }

    return (
        <div className='map-actions-wrapper'>
            <div className='map-actions-items'>
                <Form layout='inline'>
                    <Form.Item label='Vĩ độ'>
                        <Input style={{ width: '200px' }} onChange={e => setPosition({ ...position, lat: e.target.value })} />
                    </Form.Item>
                    <Form.Item label='Kinh độ'>
                        <Input style={{ width: '200px' }} onChange={e => setPosition({ ...position, lng: e.target.value })} />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' ghost onClick={handleMove}>Di chuyển</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='map-actions-items'>
                <span>Ngày cụ thể: </span>
                <DatePicker
                    showTime
                    format='DD-MM-YYYY H:mm:ss'
                    placeholder='Chọn ngày'
                    onChange={handleOnChange} />
            </div>
            <div className='map-actions-items'>
                <span>Khoảng thời gian: </span>
                <DatePicker.RangePicker
                    format='DD-MM-YYYY H:mm:ss'
                    placeholder={['Từ ngày', 'Đến ngày']}
                    showTime
                    onChange={handleOnChangeRange}
                />
            </div>
        </div>
    )
}

export default MapActions;
