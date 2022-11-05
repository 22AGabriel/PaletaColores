const URL = process.env.REACT_APP_API_COLORES;

export const consultarAPI = async() => {
    try {
        const respuesta = await fetch(URL);
        const listaColores = await respuesta.json();
        return listaColores;
    } catch (error) {
        console.log(error);
        return false;
    }
}