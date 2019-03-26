import React from "react";

function HomeLayout(props) {
	// body...
	return(

		<section> 
			<h1>Home Layout</h1>
			<p>Daniell</p>

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