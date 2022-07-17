function getUserData()
{
	let userName = document.querySelector("#enteredUserName").value;
	let entertedDate = document.querySelector("#enteredDate").value;
	let foodItems = document.querySelector("#enteredFoodItems").value;
	let duration = document.querySelector("#enteredDuration").value;
	const userData = {
		userName,
		entertedDate,
		foodItems,
		duration
	};
	const userDataArray = [];
	userDataArray.push(userData);
}