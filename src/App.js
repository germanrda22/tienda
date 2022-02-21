import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Cabecera from './components/Cabecera';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import Pie from './components/Pie';

function App() {
  const data = [
    {nombre:'Mercedes Class A', precio:65000, imagen:'assets/images/collection/arrivals1.png', cantidad:1},
    {nombre:'BMW M2', precio:75000, imagen:'assets/images/collection/arrivals2.png', cantidad:1},
    {nombre:'volkswagen golf', precio:42000, imagen:'assets/images/collection/arrivals3.png', cantidad:1},
    {nombre:'audi RS3', precio: 77000, imagen:'assets/images/collection/arrivals4.png', cantidad:1},
    {nombre:'mercedes AMG GTR', precio:170000, imagen:'assets/images/collection/arrivals5.png', cantidad:1},
    {nombre:'BMW m8 competition', precio:190000, imagen:'assets/images/collection/arrivals6.png', cantidad:1},
    {nombre:'volkswagen arteon r', precio:70000, imagen:'assets/images/collection/arrivals7.png', cantidad:1},
    {nombre:'audi r8', precio:190000, imagen:'assets/images/collection/arrivals8.png', cantidad:1}];

    
    if(localStorage.getItem('carrito')){
      var carrito = JSON.parse(localStorage.getItem('carrito'))
    }else{
      var carrito = [];
    }
    const [datos, setDatos] = useState({data:data,carrito:carrito});

    
    const sumar = (indice)=>{
      datos.carrito[indice].cantidad++
      setDatos({
        data:data,
        carrito:[...datos.carrito]
      })}
      
    const restar = (indice)=>{
      datos.carrito[indice].cantidad--
      setDatos({
        data:data,
        carrito:[...datos.carrito]
    })}

    
    const anadir = (producto)=>{
      datos.carrito.push(producto)
      setDatos({
        data:data,
        carrito:[ ...datos.carrito],
      })}
      
    const borrar = (indice)=>{
      datos.carrito.splice(indice,1)
      setDatos({
        data:data,
        carrito:[... datos.carrito],
      }
    )} 

  
  return (
    
      <BrowserRouter>
      <Cabecera carrito={datos.carrito}  borrar={borrar} />
      <Routes>
        <Route path='' element={<Productos data={datos.data} carrito={datos.carrito} anadir={anadir} aumentocantidad={sumar}/>} />
        <Route path='basket' element={<Carrito carrito={datos.carrito} borrar={borrar} aumentocantidad={sumar} disminuyecantidad={restar}/>} />
      </Routes>
      <Pie />
      </BrowserRouter>
    
  );
}

export default App;