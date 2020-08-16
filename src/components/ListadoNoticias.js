import React from 'react';
import Noticias from './Noticias';

const ListadoNoticias = ({ noticias }) => {
   return ( 
      <div className="row">
         {noticias.map(noticia => (
            <Noticias />
         ))}
      </div>
    );
}
 
export default ListadoNoticias;