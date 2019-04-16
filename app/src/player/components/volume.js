import React from "react"
import VolumeIcon from "../../icons/components/children/volume.js"

import "./volume.css"



function Volume(props) {

	return(
		<button
			className="Volume"
			onClick={props.handleClick}
		>		
			<div className="Volume-range">
				<input
				 type="range"
				 min={0}
				 max={1}
				 step={.05} 
				 onChange={props.handleChange}
				 value={props.value}

				/>	
			</div>

			<VolumeIcon 
				color="white"
				size={30}
			/>
		</button>
	)
}

export default Volume

/*
Reto:
Desafio:
Darle click al boton para mutearlo
y despues darle click para pasarlo al estado de volumen en el que estaba

colocar un icon cuando este en mute



Resultado:
Tener un boton de volumen en el playlist al cual cuando le das click se silencia el video que estás viendo y cuando le das click de nuevo pasa al estado de volumen que tenia

¿Qué necesito para lograr ese resultado?

Previo
======
1. Crear un estado volumeIconClicked con valor false

Clave
======
1. [HECHO] Detectar evento click en el elemento de volumen
2. Manejar el evento de click con una función en el componente inteligente 

	Cuando OnClicked es FALSE
	1 [HECHO] Asignar al estado onClicked el valor Opuesto (true)
	2 Asignar a this.video.volume el valor null | 0
	3 Asignar al estado volumen el valor de this.video.volumen

	Cuando OnClicked es TRUE
	1. [HECHO] çAsignar al estado onClicked el valor Opuesto (false)
	2. Asignar a this.video.volume el valor que tenemos en el estado


	Extra
	======

	Cambiar icono 


	// Veo un problema


	Va a haber un conflicto entre el evento OnClick y el evento onChange

*/