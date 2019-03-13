import React from 'react';
import ReactDOM, { render } from "react-dom";
import './index.css';
import SectionMedia from "./section-media.js";

import App from './App';
import data from "./api.json"

import * as serviceWorker from './serviceWorker';


/*DECLARACION DE VARIABLES
============================*/

	/*Selectores
	============*/

		const app = document.getElementById("root")



render(<SectionMedia />, app);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
