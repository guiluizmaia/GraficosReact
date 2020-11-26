import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Barra from './pages/barra';
import Linha from './pages/linha';
import Pizza from './pages/pizza';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Barra}/>
                <Route path="/Linha" component={Linha}/>
                <Route path="/Pizza" component={Pizza}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;