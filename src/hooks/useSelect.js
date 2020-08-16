import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

   const [state, actualizarState] = useState(stateInicial);

   const SelectNoticias = () => (
      <select 
         className="browse-default"
         value={ state }
         onChange={ e => actualizarState(e.target.value) }
      >
         { opciones.map(opcion => (
            <option 
               key={ opcion.value } 
               value={ opcion.value }
         >{ opcion.label }</option>
         )) }
      </select>
   );

   return [state, SelectNoticias];
}
 
export default useSelect;