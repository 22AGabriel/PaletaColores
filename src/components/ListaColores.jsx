import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import ItemColor from "./ItemColor"

const ListaColores = () => {
    return (
        <ListGroup className="my-5">
            <Row>
                <ItemColor></ItemColor>
            </Row>
        </ListGroup>
    );
};

export default ListaColores;