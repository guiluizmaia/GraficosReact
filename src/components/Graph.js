import React, {Component} from 'react';
import {PieChart, Pie, Line, Legend, Tooltip} from 'recharts';
import '../styles/Graph.css'

class Graph extends Component {
  
  render () {
    return (
      <PieChart className="graph" width={500} height={500}>
        <Pie data={this.props.datas} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
       
        <Legend verticalAlign="top" height={100}/>
        <Tooltip cursor={false} />
      </PieChart>
    );
  }
}

export default Graph;