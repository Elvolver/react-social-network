import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";

let getRoutes = (bll) => {
    return bll.routesData.map(route => <Route path={route.path} component={route.component} key={route.path} bll={bll}/>);
}

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        {console.log('BrowserRouter props')}
                        {console.log(props.bll)}
                        {getRoutes(props.bll)}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
