import React from "react";
import {BrowserRouter, Route, Switch, Redirect , Link} from 'react-router-dom';
import Festivals from "./Festivals";
import Home from "./Home";
import Listing from "./Listing";
import SoldOut from "./SoldOut"



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                       <Switch>                      
                        <Route path="/" component={Home} exact/>
                        <Route path="/listing" component={Listing} />
                        <Route path="/soldout" component={SoldOut}/>
                        <Route path="/festivals" component={Festivals}/>
                        </Switch>
                </div>
                <div>
       
        </div>
            </BrowserRouter>


        </div>
    );
}

export default App;
