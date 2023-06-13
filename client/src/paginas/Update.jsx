import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../Styles/App.css'
import { Link } from 'react-router-dom';

const Update = () => {
    const [juego, setJuego] = useState({
        Nombre:"",
        Plataforma:"",
        FechaLanzamiento:"",
        Descripcion:"",
        Portada:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const idJuego = location.pathname.split("/")[2]
    console.log(idJuego)

    const handleChange = (e) =>{
        setJuego(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/juegos/"+ idJuego, juego)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(juego)
    return (
        <div className='bg2'>
        <div className='from'>
            <div className='header'>
                <h1>Actualizar juego</h1>
            </div>
            <div className='box'>
                <p>Nombre:</p>
                <input type="text" placeholder='Nombre' onChange={handleChange} name='Nombre'/>
            </div>
            <div className='box'>
                <p>Plataforma:</p>
                <input type="text" placeholder='Plataforma' onChange={handleChange} name='Plataforma'/>
            </div>
            <div className='box'>
                <p>Fecha de lanzamiento:</p>
                <input type="date" placeholder='Fecha de lanzamiento' onChange={handleChange} name='FechaLanzamiento'/>
            </div>
            
            <div className='box'>
                <p>Descripción:</p>
                <input type="text" placeholder='Descripcion' onChange={handleChange} name='Descripcion'/>
            </div>
            
            <div className='box'>
                <p>Link a portada:</p>
                <input type="text" placeholder='Portada' onChange={handleChange} name='Portada'/>
            </div>
            
            <button  className='ultimo' onClick={handleClick}><a>Actualizar juego</a></button>
            <button><Link to={`/`}><a>Regresar</a></Link></button>
        </div>
        </div>
    )
}

export default Update
