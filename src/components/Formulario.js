import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

   //Usar el hook
   const [categoria, SelectNoticias] = useSelect();

   return ( 
      <div className={`${styles.buscador} row`}>
         <div className="col s12 m8 offset-m2">
            <form>
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