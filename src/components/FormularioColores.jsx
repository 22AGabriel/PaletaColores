import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { consultarAPI, crearColorAPI } from './helpers/queries';
import ListaColores from "./ListaColores"

const FormularioColores = () => {
    const {register, handleSubmit, formState: { errors }, reset, watch} = useForm();
    const [colores, setColores] = useState([])
    const color = watch("nombreColor")

    const onSubmit = (data) => {
        crearColorAPI(data).then((respuesta) => {
            if(respuesta.status === 201){
                Swal.fire("Nuevo color", "se agregó el color correctamente", "success")
                consultarAPI().then((respuesta) => {
                    setColores(respuesta);
                    reset();
                })
            } else {
                Swal.fire("Ocurrió un error", "Inténtelo nuevamente en unos minutos", "error");
            }
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className='border rounded py-3'>
                    <Form.Label className='ms-3'>Administrar colores</Form.Label>
                    <div className='d-flex bg-light p-3'>
                      <div className='caja' style={{'background' : color}}></div>
                      <div className='d-flex flex-column justify-content-center w-100 ms-2'>
                      <Form.Control 
                        className='mx-2 align-self-center'
                        type="text" 
                        {...register("nombreColor", {
                            required: "Este es un campo obligatorio",
                            minLength: {
                                value: 3,
                                message: "El mínimo de caracteres es de 3"
                            }
                        })}
                        placeholder='Ingrese un color. Ej: Blue'/>
                      <Form.Text className='text-danger ms-2'>
                        {errors.nombreColor?.message}
                      </Form.Text>
                      </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                    <Button variant="primary" type="submit" className='mt-3 me-4'>Guardar</Button>
                    </div>
                </Form.Group>
            </Form>
            <ListaColores colores={colores} setColores={setColores}></ListaColores>
        </>
    );
};

export default FormularioColores;