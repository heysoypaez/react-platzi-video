import React from 'react';
import ReactDOM, { render } from "react-dom";
import './index.css';

import Home from "./pages/containers/home.js";

import * as serviceWorker from './serviceWorker';


/*DECLARACION DE VARIABLES
============================*/

	/*Selectores
	============*/

		const app = document.getElementById("root")



//render(<SectionMedia />, app);
render(<Home />, app);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
