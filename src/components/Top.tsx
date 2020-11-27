import React from 'react';
import '../styles/components/Top.css';

export default function Top(){
    return(
        <div>
            <aside className="topo">
                <h1>GRÁFICOS</h1>
                <div className="link">
                <a href="/">
                    <span></span>
                    <span></span>
                    BARRAS
                </a>
                <a href="/Linha">
                    <span></span>
                    <span></span>
                    LINHA
                </a>
                <a href="/Pizza">
                    <span></span>
                    <span></span>
                    PIZZA
                </a>
                </div>
            </aside>
        </div>
    );
}