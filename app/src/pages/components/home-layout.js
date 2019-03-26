import React from "react";
import "./home-layout.css";

function HomeLayout(props) {
	// body...
	return(

		<section class="HomeLayout"> 
			{props.children}
		</section>

	)
}

export default HomeLayout;


/*Props Children me permite componer componentes

Crear una estructura de arbol html

Ejemplo:

<HomeLayout> 

<sidebar>
<frontal>
</HomeLayout>

*/