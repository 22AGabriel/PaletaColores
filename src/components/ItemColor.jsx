import { Button, Col } from 'react-bootstrap';

const ItemColor = ({color}) => {
    return (
        <Col xs={6} md={4} lg={3} className="my-2">
            <div className='p-2 border rounded bg-light'>
                {color.nombreColor}
                <div className='my-3 d-flex justify-content-center'>
                    <div className='caja' style={{'background' : color.nombreColor }}></div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button variant="danger">Borrar</Button>
                </div>
            </div>
        </Col>
    );
};

export default ItemColor;