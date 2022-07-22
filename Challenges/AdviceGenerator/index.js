const API_URL = 'https://api.adviceslip.com/advice'

async function advice() {
	const res = await fetch(API_URL)
	const data = await res.json();

	document.getElementById('adviceP').innerText = `"${data.slip.advice}"`;
	document.getElementById('numbP').innerText = `ADVICE ${data.slip.id}`;
	
}

async function searchN(){
	let input = document.getElementById('inputNumber').value;
	const res = await fetch(`${API_URL}/${input}`)
	const data = await res.json();

	document.getElementById('adviceP').innerText = `"${data.slip.advice}"`;
	document.getElementById('numbP').innerText = `ADVICE ${data.slip.id}`;
	


}

advice()
searchN()

