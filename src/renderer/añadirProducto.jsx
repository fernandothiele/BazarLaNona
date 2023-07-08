import React from "react";
import { useState } from "react";



// CREATE TABLE Inventario ( // tabla inventraio(Procuctos)
//     codigo_producto INT PRIMARY KEY NOT NULL,
//     nombre_producto VARCHAR(255) NOT NULL,
//     informacion VARCHAR(255) NOT NULL,
//     precio_unitario DECIMAL(10, 2) NOT NULL,
//     cantidad INT NOT NULL
//   );


export default function AñadirProducto(){
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [informacion, setInformacion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');




    function handleProduct(e){
        e.preventDefault();
        const product = {
            codigo_producto: Number(codigo),
            nombre_producto: nombre,
            informacion: informacion,
            precio_unitario: Number(precio),
            cantidad: Number(cantidad),
        };

        try{
            window.añadir.añadirProducto(product)
        }
        catch(error){
            console.log("Error al registrar:",error)
        }
        finally{
            setCodigo('');
            setNombre('');
            setInformacion('');
            setPrecio('');
            setCantidad('');
        }
    };


    return(
        <>
        <h1>Añadir Producto</h1>
        <form onSubmit={handleProduct}>
            <div>
                <label htmlFor="codigo">Codigo:</label>
                <input
                    type="number"
                    id="codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="informacion">Informacion:</label>
                <input
                    type="text"
                    id="informacion"
                    value={informacion}
                    onChange={(e) => setInformacion(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="precio">Precio:</label>
                <input
                    type="number"
                    id="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="cantidad">Cantidad:</label>
                <input
                    type="number"
                    id="cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Añadir Producto</button>
        </form>
        </>
    )
}