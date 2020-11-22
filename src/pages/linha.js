import React, { useState } from 'react';
import Top from '../components/Top';
import {LineChart, CartesianGrid , Line, Legend, Tooltip, XAxis, YAxis, Label} from 'recharts';
import '../styles/pages/Barra.css';

import Graph from '../components/Graph';


const data01 = [
  {
    "name": "Group A",
    "value": 400,
    "fill": "#102255"
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
const [fills, setFills] = useState([]);
const [datas, setDatas] = useState([]);
const [t, setT] = useState(true);
const [XName, setXName] = useState([""]);
const [YName, setYName] = useState([""]);


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
  const handleChangeFill = (e, index) =>{  
    fills[index] = e.target.value;
  
    setFills([...fills]);
  }

  const handleRemoteInput = (position) =>{
    
    if(position > 0){
      setInputs([...inputs.filter((_, index) => index != position)])
      setDatas([...datas.filter((_, index) => index != position)])
      setNomes([...nomes.filter((_, index) => index != position)])
      setFills([...fills.filter((_, index) => index != position)])
    }
  }

  const handleChangeX = (e) => {
      XName[0] = e.target.value;
      setXName([...XName]);
  }

  const handleChangeY = (e) => {
    YName[0] = e.target.value;
    setYName([...YName]);
}
  
  const geraGraph = async()=>{
    await setT(false);
    inputs.map((input, index)=>{
      var t = parseFloat(input)
      datas[index] = JSON.parse(JSON.stringify({"name": nomes[index], "value": t, "fill": fills[index]}))
      setDatas([...datas]);
    })
    setT(true);
    console.log(t);
   }

   const geraPorcent = async()=>{
    await setT(false);
    
    var maximo = 0;
    inputs.map((input, index)=>{
      maximo = maximo + parseFloat(input)      
    })

    inputs.map((input, index)=>{
      var t = parseFloat(input)
      t = (t*100)/maximo
      datas[index] = JSON.parse(JSON.stringify({"name": nomes[index], "value": t, "fill": fills[index]}))
      setDatas([...datas]);
    })
    setT(true);
    console.log(t);
   }

  return (
    <div className="barra" >
    
    <Top/>

    <div className="area">
    
      <input value={XName} type="text" name="x" placeholder={`Informe o nome do eixo X`} onChange={(e) => handleChangeX(e)} />
      <input value={YName} type="text" name="y" placeholder={`Informe o nome do eixo Y`} onChange={(e) => handleChangeY(e)} />
    {
        inputs.map((input, index) =>(
            <>
            <div className="input" key={index}>
            {/* <button onClick={addButton}>Adicionar mais um campo</button> */}
            <button onClick={addButton}>+</button>
            {/* <button onClick={() => {handleRemoteInput(index)}}>Remover um campo</button> */}
            <button onClick={() => {handleRemoteInput(index)}}>-  </button>
            <br/> 
            <label for={`input-${index+1}`}>
            {`Dado ${index+1} :`}
            <input id={`input-${index+1}`} value={input} type="text" name="name" placeholder={`Informe o dado ${index+1}`} onChange={(e) => handleChangeInput(e, index)} />
            <input id={`nome-${index+1}`} value={nomes[index]} type="text" name="name" placeholder={`Informe o nome do dado ${index+1}`} onChange={(e) => handleChangeName(e, index)} />
            <input id={`fill-${index+1}`} value={fills[index]} type="text" name="name" placeholder={`Informe a cor do dado (hexadecimal) ${index+1}`} onChange={(e) => handleChangeFill(e, index)} />
            <br/>
            </label>
        </div></>          

        ))
    }
    <button onClick={geraGraph}>GERAR GRÁFICO</button>
    <button onClick={geraPorcent}>GERAR GRÁFICO COM DADOS EM PORCENTAGEM</button>

    {t ? <LineChart className="graph" width={1200} height={500} data={datas}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value={XName} offset={0} position="insideBottom"/>
        </XAxis>
        <YAxis label={{ value: YName, angle: -90, position: 'insideLeft' }} />
        <Line dataKey="value"/>          
        <Legend verticalAlign="top" height={100}/>
        <Tooltip cursor={false} />
      </LineChart>
    :
    <LineChart className="graph" width={500} height={500}>
       <CartesianGrid strokeDasharray="3 3" />
      </LineChart>}
   {/* <Graph geraGraph={geraGraph}/> */}
    </div>
   
    </div>
    
)}

export default Barra;