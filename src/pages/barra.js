import React, { useState } from 'react';
import Top from '../components/Top';
import {PieChart, Pie, Line, Legend, Tooltip} from 'recharts';
import '../styles/pages/Barra.css';

import Graph from '../components/Graph';


const data01 = [
  {
    "name": "Group A",
    "value": "400"
  },
  {
    "name": "Group B",
    "value": "300"
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];

function Barra(){


const [inputs, setInputs] = useState([""]);
const [nomes, setNomes] = useState([]);
const [datas, setDatas] = useState([]);
const [t, setT] = useState(true);


  const addButton = (e) =>{
    e.preventDefault();
    setInputs([... inputs, ""]);      
  }

  const handleChangeInput = (e, index) =>{  
      inputs[index] = e.target.value;
    
      setInputs([...inputs]);
  }
  const handleChangeName = (e, index) =>{  
    nomes[index] = e.target.value;
  
    setNomes([...nomes]);
}

  const handleRemoteInput = (position) =>{
    
    if(position > 0){
      setInputs([...inputs.filter((_, index) => index != position)])
      setDatas([...datas.filter((_, index) => index != position)])
      setNomes([...nomes.filter((_, index) => index != position)])
    }
  }
  const geraGraph = async()=>{
    await setT(false);
    inputs.map((input, index)=>{
      var t = parseFloat(input)
      datas[index] = JSON.parse(JSON.stringify({"name": nomes[index], "value": t}))
      setDatas([...datas]);
    })
    setT(true);
    console.log(t);
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
            <label for={`input-${index+1}`}>
            {`Dado ${index+1} :`}
            <input id={`input-${index+1}`} value={input} type="text" name="name" placeholder={`Informe o dado ${index+1}`} onChange={(e) => handleChangeInput(e, index)} />
            <input id={`nome-${index+1}`} value={nomes[index]} type="text" name="name" placeholder={`Informe o nome do dado ${index+1}`} onChange={(e) => handleChangeName(e, index)} />
            <br/>
            </label>
        </div></>          

        ))
    }
    <button onClick={geraGraph}>Gerar gráfico</button>

    {t ? <PieChart className="graph" width={500} height={500}>
        <Pie data={datas /*data01*/} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
       
        <Legend verticalAlign="top" height={100}/>
        <Tooltip cursor={false} />
      </PieChart>
    :
    <PieChart className="graph" width={500} height={500}>
       
      </PieChart>}
   {/* <Graph geraGraph={geraGraph}/> */}

    </div>
    </div>
    
)}

export default Barra;