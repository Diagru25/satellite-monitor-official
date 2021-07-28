import './Header.css';
import { Menu, Dropdown, DownOutlined, Checkbox, Modal, 
ExclamationCircleOutlined, SyncOutlined, QuestionCircleOutlined, CheckCircleOutlined } from '../../../core/adapters/ant-design';
import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateSatelliteDatabase, setUpdateState, stopUpdateSatelliteDatabase } from '../../../../Redux/Position';
const Header = () => {
    const dispatch = useDispatch()
    const [autoUpdate, setAutoUpdate] = useState(true)
    // Modal update
    const [modalUpdateVisible, setModalUpdateVisible] = useState(false);
    const [modalUpdateConfirmLoading, setModalUpdateConfirmLoading] = useState(false);
    const [modalUpdateMaskClosable, setModalUpdateMaskClosable] = useState(true)
    const [modalUpdateText, setModalUpdateText] = useState(' Bạn có chắc chắn muốn cập nhật dữ liệu mới?');
    const [modalUpdateCancelText, setModalUpdateCancelText] = useState('Không')
    const [modalUpdateOkText, setModalUpdateOkText] = useState('Cập nhật')
    const {updateState, updateResponse} = useSelector(state => state.positionReducer)
    // Modal notice
    const [modalNoticeVisible, setModalNoticeVisible] = useState(false);
    // const [modalNoticeConfirmLoading, setModalNoticeConfirmLoading] = useState(false);
    const [modalNoticeMaskClosable, setModalNoticeMaskClosable] = useState(false)
    const [modalNoticeText, setModalNoticeText] = useState(' Bạn có chắc chắn muốn dừng quá trình cập nhật dữ liệu mới?');
    const [modalNoticeCancelText, setModalNoticeCancelText] = useState('Không')
    const [modalNoticeOkText, setModalNoticeOkText] = useState('Hủy')
    const showModalUpdate = () => {
        setModalUpdateVisible(true);
    };

    const modalUpdateHandleOk = async () => {
        setModalUpdateText(' Dữ liệu đang cập nhật! Chờ trong giây lát ...')
        setModalUpdateOkText('Đang cập nhật')
        setModalUpdateCancelText('Hủy cập nhật')
        setModalUpdateConfirmLoading(true)
        setModalUpdateMaskClosable(false)
        dispatch(setUpdateState(1))
        await dispatch(updateSatelliteDatabase())
        setModalUpdateMaskClosable(true)
        setModalUpdateVisible(false);
        setModalUpdateConfirmLoading(false)
        setModalUpdateText(' Bạn có chắc chắn muốn cập nhật dữ liệu mới?')
        setModalUpdateCancelText('Không')
        setModalUpdateOkText('Cập nhật')
    };

    const modalUpdateHandleCancel = async () => {
        if (updateState === 1){
            setModalNoticeVisible(true)
        }
        else
            setModalUpdateVisible(false);
        // setModalUpdateMaskClosable(true)
    };
    const modalNoticeHandleOk = async () => {
        if (updateState === 1){
            await dispatch(stopUpdateSatelliteDatabase())
            dispatch(setUpdateState(0))
            setModalUpdateMaskClosable(true)
            setModalUpdateVisible(false);
            setModalNoticeText(' Đã dừng quá trình cập nhật dữ liệu!')
            setModalNoticeCancelText('Thoát')
            setModalNoticeOkText('Xong')
            setModalNoticeMaskClosable(true)
        }
        else {
            setModalNoticeVisible(false)
            setModalNoticeOkText('Hủy')
            setModalNoticeCancelText('Không')
            setModalNoticeText(' Bạn có chắc chắn muốn dừng quá trình cập nhật dữ liệu mới?')
        }
        
    };
    const modalNoticeHandleCancel = async () => {
        setModalNoticeVisible(false);
    };
    const menu =
        (
            <Menu>
                <Menu.Item>
                    <Checkbox checked={autoUpdate} >
                        Tự động cập nhật dữ liệu
                    </Checkbox>
                </Menu.Item>
                <Menu.Item>
                    Lựa chọn 2
                </Menu.Item>
                <Menu.Item>
                    Lựa chọn 3
                </Menu.Item>
                <Menu.Item>
                    Lựa chọn 4
                </Menu.Item>
            </Menu>
        );

    return (
        <div className='header'>
            <div className='text-header'>
                <span>công cụ trinh sát</span>
            </div>
            <div className='left-actions'>
                <ul>
                    <li onClick={showModalUpdate}>
                        Cập nhật dữ liệu
                    </li>
                    {/* <li>
                        Cài đặt
                    </li>
                    <li>
                        Nút 3
                    </li>
                    <li>
                        Nút 4
                    </li> */}
                    <li>
                        <Dropdown overlay={menu} placement='bottomLeft' arrow>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                Cài đặt
                                <DownOutlined style={{ fontSize: '1rem', fontWeight: 'bold', padding: '3px 0px 0px 5px' }} />
                            </div>
                        </Dropdown>
                    </li>
                </ul>
            </div>
            <div className="right-actions">
            </div>
            <Modal
                title="Cập nhật dữ liệu"
                visible={modalUpdateVisible}
                onOk={modalUpdateHandleOk}
                confirmLoading={modalUpdateConfirmLoading}
                onCancel={modalUpdateHandleCancel}
                cancelText={modalUpdateCancelText}
                okText={modalUpdateOkText}
                maskClosable={modalUpdateMaskClosable}
                cancelButtonProps={{ danger: true }}
                // width={400}
            >
                <p> { updateState !== 1 ? 
                <QuestionCircleOutlined style={{ color: '#1890ff', fontSize: '18px' }}/> 
                : 
                <SyncOutlined spin style={{ color: '#1890ff', fontSize: '18px' }}/>} 
                 {modalUpdateText}
                </p>
            </Modal>
            <Modal
                title="Dừng quá trình cập nhật dữ liệu"
                visible={modalNoticeVisible}
                onOk={modalNoticeHandleOk}
                // confirmLoading={modalNoticeConfirmLoading}
                onCancel={modalNoticeHandleCancel}
                cancelText={modalNoticeCancelText}
                okText={modalNoticeOkText}
                okType='danger'
                maskClosable={modalNoticeMaskClosable}
            >
                <p> { updateState !== 1 ? 
                    <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '18px' }}/> 
                    : 
                    <ExclamationCircleOutlined style={{ color: '#faad14', fontSize: '18px' }}/>
                    }
                    {modalNoticeText}
                </p>
            </Modal>
        </div>
    )
}

export default Header;