import React from 'react';
import { Button, ListGroup, Col } from 'react-bootstrap';

const ItemColor = () => {
    return (
        <Col xs={6} md={4} lg={3} className="my-2 rounded">
            <ListGroup.Item>
                Nombre color
                <div className='my-3 d-flex justify-content-center'>
                    <div className='caja'></div>
                </div>
                <div className='d-flex justify-content-end'>
                <Button variant="danger">Borrar</Button>
                </div>
            </ListGroup.Item>
        </Col>
    );
};

export default ItemColor;