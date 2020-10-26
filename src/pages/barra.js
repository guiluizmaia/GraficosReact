import React, { useState } from 'react';

import Top from '../components/Top';

import '../styles/pages/Barra.css';

function Barra() {
  const [inputs, setInputs] = useState([""]);

  const addButton = (e) =>{
    e.preventDefault();
    setInputs([... inputs, ""]);      
  }

  const handleChangeInput = (e, index) =>{
      inputs[index] = e.target.value;
      setInputs([...inputs]);
  }
  const handleRemoteInput = (position) =>{
    
    if(position > 0){
      setInputs([...inputs.filter((_, index) => index != position)])
    }
  }

  return (
    <div className="barra" >
    
    <Top/>

    <div className="area">
    
       
    {
        inputs.map((input, index) =>(
            <>
            <div className="input" key={index}>
            <button onClick={addButton}>Adicionar mais um campo</button>
            <button onClick={() => {handleRemoteInput(index)}}>Remover um campo</button>
            <br/> 
            <label for={`phone-${index+1}`}>
            {`Dado ${index+1} :`}
            <input id={`phone-${index+1}`} value={input} type="text" name="name" placeholder={`Informe o dado ${index+1}`} onChange={(e) => handleChangeInput(e, index)} />
            <br/>
            </label>
        </div></>          

        ))
    }
    </div>
    </div>
    
)}

export default Barra;