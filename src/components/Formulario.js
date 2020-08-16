import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ guardarCategoria }) => {

   const OPCIONES = [
      { value: 'general', label: 'General' },
      { value: 'business', label: 'Negocios' },
      { value: 'entertainment', label: 'Entretenimiento' },
      { value: 'health', label: 'Salud' },
      { value: 'science', label: 'Ciencia' },
      { value: 'sports', label: 'Deportes' },
      { value: 'technology', label: 'Tecnología' }
   ];

   //Usar el hook
   const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

   //Submit al form pasar categoria a App.js
   const buscarNoticias = e => {
      e.preventDefault();
      guardarCategoria(categoria);
   }

   return ( 
      <div className={`${styles.buscador} row`}>
         <div className="col s12 m8 offset-m2">
            <form 
               onSubmit={ buscarNoticias }
            >
               <h4 className={ styles.heading }>Encuentra noticias por categoria</h4>
               <SelectNoticias />
               <div className="input-field col s12">
                  <input 
                     type="submit"
                     className={`btn-large darken-2 amber ${styles.btn_block}`}
                     value="Buscar"
                  />
               </div>
            </form>
         </div>
      </div>
    );
}
 
export default Formulario;