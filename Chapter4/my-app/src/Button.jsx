import React from 'react';
import { Button } from 'react-bootstrap';

function Buttons({ type = 'default', disabled = false, text = 'Click Me' }) {
    return (
        <Button variant={type} disabled={disabled}>
            {text}
        </Button>
    );
}

export default Buttons;
