import React from 'react';
import { render } from "react-dom";
import './index.css';

import Home from "./pages/containers/home.js";

import data from "./api.json";

import * as serviceWorker from './serviceWorker';


/*DECLARACION DE VARIABLES
============================*/

	/*Selectores
	============*/

		const homeContainer = document.getElementById("home-container")



//render(<SectionMedia />, app);
render(<Home data={data} />, homeContainer);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
