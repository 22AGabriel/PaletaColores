import { Button, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { borrarColorAPI, consultarAPI } from './helpers/queries';

const ItemColor = ({color, setColores}) => {

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
                if (respuesta.status === 200){
                  Swal.fire(
                    "Color eliminado",
                    "El color fue eliminado correctamente",
                    "success"
                  );
                  consultarAPI().then((respuesta) => {
                      setColores(respuesta);
                    })
                } else {
                  Swal.fire(
                    "Ocurrió un error",
                    "Inténtelo nuevamente en unos minutos",
                    "error"
                  )
                }
              })
            }
          })
    }

    return (
        <Col xs={6} md={4} lg={3} className="my-2">
            <div className='p-2 border rounded bg-light'>
                {color.nombreColor}
                <div className='my-3 d-flex justify-content-center'>
                    <div className='caja' style={{'background' : color.nombreColor }}></div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button variant="danger" onClick={borrarColor}>Borrar</Button>
                </div>
            </div>
        </Col>
    );
};

export default ItemColor;