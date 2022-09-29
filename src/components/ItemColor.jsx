import React from 'react';
import { Button, Col } from 'react-bootstrap';

const ItemColor = ({nombreColor, borrarColor}) => {
    return (
        <Col xs={6} md={4} lg={3} className="my-2">
            <div className='p-2 border rounded bg-light'>
                {nombreColor}
                <div className='my-3 d-flex justify-content-center'>
                    <div className='caja' style={{'background' : nombreColor }}></div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button variant="danger" onClick={() => borrarColor(nombreColor)}>Borrar</Button>
                </div>
            </div>
        </Col>
    );
};

export default ItemColor;