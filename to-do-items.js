/** @format */

async function fetchingData() {
	const res = await fetch(
		"http://127.0.0.1:3000/",
		{
			mode: "no-cors",
		}
	);
	const data = await res.json();
	console.log(data);
}
fetchingData();
const testingApi =
	document.getElementById("sam");
