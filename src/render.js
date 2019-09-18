import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPost, exportinputValue} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} exportinputValue={exportinputValue}/>, document.getElementById('root'));
};