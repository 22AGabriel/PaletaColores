import React from 'react';
import { Row } from 'react-bootstrap';
import ItemColor from "./ItemColor"

const ListaColores = ({arregloColores, borrarColor}) => {
    return (
        <Row className="my-5">
            {
            arregloColores.map((color, posicion) => <ItemColor key={posicion} nombreColor={color} borrarColor={borrarColor}></ItemColor>)
            }  
        </Row>
    );
};

export default ListaColores;