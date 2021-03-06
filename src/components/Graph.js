import React, {Component, useState} from 'react';
import {PieChart, Pie, Line, Legend, Tooltip} from 'recharts';
import { isConstructorDeclaration } from 'typescript';
import '../styles/Graph.css'





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

class Graph extends Component {
  constructor(props){
    super(props) 
    
    var inputs = props.inputs;
    this.inputs = inputs;

    var nomes = props.nomes;
    this.nomes = nomes;

    const geraGraph = props.geraGraph;
    this.geraGraph = geraGraph;
    
    this.state = {
      estado: false
    }
  }

  
  

  render () {
    
    

    const troca = async()=>{
      
      await this.setState({
        estado: false
      })
      this.setState({
        estado: true
      })
      this.geraGraph();
    }

    if(this.state.estado){
    return (
      <div> 
      <button onClick={troca}>Gerar gráfico</button>  
      <PieChart className="graph" width={500} height={500}>
        <Pie data={/*this.props.datas*/ data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
       
        <Legend verticalAlign="top" height={100}/>
        <Tooltip cursor={false} />
      </PieChart>
      </div>
      
      
    );
  }
  else{
    return (
      <div>
      <button onClick={troca}>Gerar gráfico</button>   
      <PieChart className="graph" width={500} height={500}>
        
      </PieChart>
     </div>
     
    );
  }
  }
}

export default Graph;