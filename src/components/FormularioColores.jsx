import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaColores from "./ListaColores"

const FormularioColores = () => {
    const [color, setColor] = useState('');
    const [arregloColores, setArregloColores] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloColores([...arregloColores, color]);
        setColor('');
    }

    const borrarColor = (nombreColor) => {
        let arregloModificado = arregloColores.filter((item) => item !== nombreColor);
        setArregloColores(arregloModificado);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='border rounded py-3'>
                    <Form.Label className='ms-3'>Administrar colores</Form.Label>
                    <div className='d-flex bg-light p-3'>
                      <div className='caja'></div>
                      <Form.Control 
                        className='mx-2 align-self-center'
                        type="text" 
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        placeholder='Ingrese un color. Ej: Blue'/>
                    </div>
                    <div className='d-flex justify-content-end'>
                    <Button variant="primary" type="submit" className='mt-3 me-4'>Guardar</Button>
                    </div>
                </Form.Group>
            </Form>
            <ListaColores arregloColores={arregloColores} borrarColor={borrarColor}></ListaColores>
        </>
    );
};

export default FormularioColores;