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

export const crearColorAPI = async(color) => {
    try {
        const respuesta = await fetch(URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const borrarColorAPI = async(id) => {
    try{
        const respuesta = await fetch(URL+`/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}

export const editarColorAPI = async(id, color) => {
    try{
        const respuesta = await fetch(URL+`/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(color)
        });
        return respuesta;
    }catch(error){
        console.log(error);
        return false;
    }
}