import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const key = '55d3a79dca624b1b8ef81ea686ace733';
      const pais = 'co'
      const url = `
        https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${key}
      `;

      //Consultando la API
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      //Guardando el resultado
      guardarNoticias(resultado.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={ guardarCategoria }
        />
      </div>
      <ListadoNoticias 
        noticias={ noticias }
      />
    </Fragment>
  );
}

export default App;
