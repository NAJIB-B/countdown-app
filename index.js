// let new_year = new Date ("2023-12-25T00:00:00.000Z");
// let today = new Date();
// let milliseconds = new_year.getTime() - today.getTime();
// let seconds = Math.floor((milliseconds / 1000) % 60) + "";
// let minutes = Math.floor( (milliseconds / 1000 / 60) % 60) + "";
// let hours = Math.floor((milliseconds / 1000/ 60 / 60) % 24) + "";
// let days =   Math.floor(milliseconds / 1000/ 60 / 60 / 24) + "";
// console.log("New years date is ",new_year.toString());
// console.log("today's date and time is ", today.toString());
// console.log("the difference is ", milliseconds);
// console.log(`the time left is ${days.padStart(2, "0")}:${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`);

const day_el = document.getElementById("day");
const hour_el = document.getElementById("hour");
const minute_el = document.getElementById("minute");
const second_el = document.getElementById("second");

function log_date() {
	let new_year = new Date ("Jan 1, 2024 00:00:00").getTime();
	let today = new Date().getTime();
	let milliseconds = new_year - today;
	let seconds = Math.floor((milliseconds / 1000) % 60) + "";
	let minutes = Math.floor( (milliseconds / 1000 / 60) % 60) + "";
	let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24) + "";
	let days =   Math.floor(milliseconds / 1000/ 60 / 60 / 24) + "";
	day_el.innerHTML = `${days.padStart(2, "0")}d`;
	hour_el.innerHTML = `${hours.padStart(2, "0")}h`;
	minute_el.innerHTML = `${minutes.padStart(2, "0")}m`;
	second_el.innerHTML = `${seconds.padStart(2, "0")}s`;

}
const timer = setInterval(log_date, 1000);
