import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

   const [state, actualizarState] = useState('');

   const SelectNoticias = () => (
      <select 
         className="browse-default"
      >
         <option value="">--Seleccione Categoria--</option>   
      </select>
   );

   return [state, SelectNoticias];
}
 
export default useSelect;