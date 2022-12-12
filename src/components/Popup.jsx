import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/stories/components';

export default () => (
    <Popup trigger={<button>Trigger</button>} position="right center">
        <div>Popup Content Here!!!</div>
    </Popup>
);