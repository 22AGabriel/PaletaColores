import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaColores from "./ListaColores"

const FormularioColores = () => {
    const coloresLocalStorage = JSON.parse(localStorage.getItem('listaColoresStorage')) || [];
    const [color, setColor] = useState('');
    const [arregloColores, setArregloColores] = useState(coloresLocalStorage);
    const [cajaColor, setCajaColor] = useState("");

    if(cajaColor === ""){
        setCajaColor("blue")
    }

    useEffect(() => {
        localStorage.setItem('listaColoresStorage', JSON.stringify(arregloColores))
    }, [arregloColores]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloColores([...arregloColores, color]);
        setColor('');
    }

    const borrarColor = (nombreColor) => {
        let arregloModificado = arregloColores.filter((item) => item !== nombreColor);
        setArregloColores(arregloModificado);
    }

    const cambiarColor = (colorIngresado) => {
        setCajaColor(colorIngresado);
        setColor(colorIngresado);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='border rounded py-3'>
                    <Form.Label className='ms-3'>Administrar colores</Form.Label>
                    <div className='d-flex bg-light p-3'>
                      <div className='caja' style={{'background' : cajaColor}}></div>
                      <Form.Control 
                        className='mx-2 align-self-center'
                        type="text" 
                        onChange={(e) => cambiarColor(e.target.value)}
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