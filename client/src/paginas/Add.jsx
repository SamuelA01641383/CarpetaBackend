import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/App.css'
import { Link } from 'react-router-dom';
const Add = () => {
    const [juego, setJuego] = useState({
        Nombre:"",
        Plataforma:"",
        FechaLanzamiento:"",
        Descripcion:"",
        Portada:"",
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setJuego(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/juegos", juego)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(juego)
    return (
        <div className='bg2'>
            <div className='header'>
                <h1>Agregar juego</h1>
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
            
            <div>
            <button className='ultimo' onClick={handleClick}> <a>Agregar</a></button>
            <button><Link to={`/`}><a>Regresar</a></Link></button>
            </div>
            
        </div>
    )
}

export default Add
