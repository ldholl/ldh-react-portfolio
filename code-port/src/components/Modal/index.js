import React from 'react';
import fullResume from '../../assets/media/resume-full.jpg';

function Modal({onClose}){

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <img id='lg-resume'src={fullResume} onClick={onClose} />
            </div>
        </div>

    )
}

export default Modal;