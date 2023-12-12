
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
