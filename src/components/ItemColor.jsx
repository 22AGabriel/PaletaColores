import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { borrarColorAPI, consultarAPI, editarColorAPI } from "./helpers/queries";

const ItemColor = ({ color, setColores }) => {
    const {register, handleSubmit, formState: { errors }} = useForm();

  const borrarColor = () => {
    Swal.fire({
      title: "Eliminar color",
      text: "¿Estás seguro de eliminar este color?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      CancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarColorAPI(color.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Color eliminado",
              "El color fue eliminado correctamente",
              "success"
            );
            consultarAPI().then((respuesta) => {
              setColores(respuesta);
            });
          } else {
            Swal.fire(
              "Ocurrió un error",
              "Inténtelo nuevamente en unos minutos",
              "error"
            );
          }
        });
      }
    });
  };

  const onSubmit = (data) => {
    editarColorAPI(color.id, data).then((respuesta) => {
        if(respuesta.status === 200){
            Swal.fire("Color editado", "se editó el color correctamente", "success")
            consultarAPI().then((respuesta) => {
                setColores(respuesta);
            })
        } else {
            Swal.fire("Ocurrió un error", "Inténtelo nuevamente en unos minutos", "error");
        }
    })
  }

  return (
    <Col xs={6} md={4} lg={3} className="my-2">
      <div className="p-2 border rounded bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Control className="fs-5 border-0 bg-transparent"
            placeholder={color.nombreColor}
            {...register("nombreColor", {
                required: "Este es un campo obligatorio",
                minLength: {
                    value: 3,
                    message: "El mínimo de caracteres es de 3"
                }
            })}>
            </Form.Control>
            <Form.Text className="text-danger">
                {errors.nombreColor?.message}
            </Form.Text>
          </Form.Group>
        </Form>
        <div className="my-3 d-flex justify-content-center">
          <div className="caja" style={{ background: color.nombreColor }}></div>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="danger" onClick={borrarColor}>
            Borrar
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default ItemColor;
