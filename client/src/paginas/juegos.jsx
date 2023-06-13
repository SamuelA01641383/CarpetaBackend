import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../Styles/App.css'
import PORT from '../server/index.js'

const Juegos = () => {
    const [juegos, setJuegos] = useState([])

    useEffect(()=>{
        const fetchjuegos = async ()=>{
            try{
                const res = await axios.get("http://us-cdbr-east-06.cleardb.net:" + PORT + "/juegos")
                setJuegos(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchjuegos()
    },[])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://us-cdbr-east-06.cleardb.net:" + PORT + "/juegos/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    console.log(juegos)   

    return (
        <div className='bg2'>
        <div className='bg'>
        <div className='header'>
            <h1>Bases de datos de juegos </h1>
        </div>
        
        <div className='juegos'>
            {
            juegos.map(juego=>(
                <div className="juego" key={juego.idJuegos}>
                    <div className='contenedor'>
                    <div>   
                    <img  className ='imgbox' src={juego.Portada}/>
                    </div>
                    <div className='texto'>
                    <h2>{juego.Nombre}</h2>
                    <h3>Plataforma: {juego.Plataforma}</h3>
                    <h3>Fecha de lanzamiento: {juego.FechaLanzamiento.split("T")[0]}</h3>
                    <h3>Descripción: {juego.Descripcion}</h3>
                    </div>
                    <button className="delete" onClick={()=>handleDelete(juego.idJuegos)}><a>Borrar juego</a></button>
                    <button className="update"><Link to={`/update/${juego.idJuegos}`}><a>Actualizar Juego</a></Link></button>
                    
                    </div>
                </div>
                
            ))}
        </div>
        <div className='bg'>
            <button className='ultimo'><Link to="/add">Añadir un juego</Link></button>
        </div>
        
        </div>
        </div>
    )
}

export default Juegos