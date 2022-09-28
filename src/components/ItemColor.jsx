import React from 'react';
import { Button, ListGroup, Col } from 'react-bootstrap';

const ItemColor = ({nombreColor, borrarColor}) => {
    return (
        <Col xs={6} md={4} lg={3} className="my-2 rounded">
            <ListGroup.Item>
                {nombreColor}
                <div className='my-3 d-flex justify-content-center'>
                    <div className='caja' style={{'background' : nombreColor }}></div>
                </div>
                <div className='d-flex justify-content-end'>
                <Button variant="danger" onClick={() => borrarColor(nombreColor)}>Borrar</Button>
                </div>
            </ListGroup.Item>
        </Col>
    );
};

export default ItemColor;