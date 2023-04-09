/** @format */
const todoListEl =
	document.getElementById("myUL");
const todoItemEl =
	document.getElementById("anItem");

async function fetchingData() {
	const res = await fetch(
		"http://127.0.0.1:3000/"
		/*{
			headers: {
				"Content-Type":
					"application/json",
			},
		}*/
	);
	const data = await res.json();
	console.log(data);

	for (let element of data) {
		console.log(element);
		const newItem =
			document.createElement("li");
		newItem.innerHTML = element.todo;
		todoListEl.append(newItem);
	}
}
fetchingData();
