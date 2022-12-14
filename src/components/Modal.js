import React, { useState } from 'react'
import './Modal.css';

function Modal() {

    const [show, setShow] = useState(false);

    const foo = () => {
      setShow(!show)
    }

    return (
        <></>
    )
}

export default Modal