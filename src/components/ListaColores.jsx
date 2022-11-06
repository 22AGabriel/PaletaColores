import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { consultarAPI } from './helpers/queries';
import ItemColor from "./ItemColor"

const ListaColores = ({colores, setColores}) => {

    useEffect(() => {
        consultarAPI().then((respuesta) => {
            setColores(respuesta)
        })
    }, [])

    return (
        <Row className="my-5">
            {
            colores.map((color) => <ItemColor key={color._id} color={color} setColores={setColores}></ItemColor>)
            }  
        </Row>
    );
};

export default ListaColores;