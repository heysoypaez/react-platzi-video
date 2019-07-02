
function leftPad(number) {
	const pad = "00";
	number = number.toString()

	// if 1 => 01, if 10 => 10
	return pad.substring(0, pad.length - number.length ) + number ;
}

function formattedTime(secs) {

	// 65 / 60 =
	const minutes = parseInt(secs / 60, 10) //base decimal, convirtiendo en minutos
	const seconds = parseInt(secs % 60, 10) //devuelve los segundos que le sobraron al minuto

	return `${minutes} : ${leftPad(seconds)}`
}

export default formattedTime;