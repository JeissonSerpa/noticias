import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';

const Noticias = ({ noticia }) => {

   //Extraer los datos
   const {urlToImage, url, title, description, source} = noticia;

   return ( 
      (urlToImage) ?
         <div className="col s12 m6 l4">
            <div className={`card ${styles.card}`}>
               <div className="card-image">
                  <img className={styles.imgNoticia} src={ urlToImage } alt={ title }/>
                  <span className="card-title">{ source.name }</span>
               </div>
               <div className={`card-content ${styles.card_content}`}>
                  <h5>{ title }</h5>
                  <p>{ description }</p>
               </div>
               <div className="card-action">
                  <a 
                     href={url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="waves-effect waves-light btn"
                  >
                     ver mas
                  </a>
               </div>
            </div>
         </div>
      : null
    );
}

Noticias.propTypes = {
   noticia: PropTypes.object.isRequired
}
 
export default Noticias;