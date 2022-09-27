import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaColores from "./ListaColores"

const FormularioColores = () => {
    return (
        <>
            <Form>
                <Form.Group className='border rounded py-3'>
                    <Form.Label className='ms-3'>Administrar colores</Form.Label>
                    <div className='d-flex bg-light p-3'>
                      <div className='caja'></div>
                      <Form.Control 
                        className='mx-2 align-self-center'
                        type="text" 
                        placeholder='Ingrese un color. Ej: Blue'/>
                    </div>
                    <div className='d-flex justify-content-end'>
                    <Button variant="primary" type="submit" className='mt-3 me-4'>Guardar</Button>
                    </div>
                </Form.Group>
                <ListaColores></ListaColores>
            </Form>
        </>
    );
};

export default FormularioColores;