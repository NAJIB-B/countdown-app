import {quotesArray} from "./quotes.js"


const day_el = document.getElementById("day");
const hour_el = document.getElementById("hour");
const minute_el = document.getElementById("minute");
const second_el = document.getElementById("second");
const quote_textarea = document.getElementById("quote_textarea");
const generate_btn = document.getElementById("generate_btn");
const copy_btn = document.getElementById("copy_btn");

//event listeners
generate_btn.addEventListener("click", generate_random_quote);
copy_btn.addEventListener("click", copy_quote);

//hiding copy button
function show_or_hide_cpy_btn() {

	copy_btn.innerHTML = "Copy quote";
	if (quote_textarea.innerHTML == "")
	{
		copy_btn.style.display = "none";
	
	}else{
		copy_btn.style.display = "block";
	}
}


// Timer section
function log_date() {
	let new_year = new Date ("Jan 1, 2024 00:00:00").getTime();
	let today = new Date().getTime();
	let milliseconds = new_year - today;
	let seconds = Math.floor((milliseconds / 1000) % 60) + "";
	let minutes = Math.floor( (milliseconds / 1000 / 60) % 60) + "";
	let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24) + "";
	let days =   Math.floor(milliseconds / 1000/ 60 / 60 / 24) + "";
	day_el.innerHTML = `${days.padStart(2, "0")}`;
	hour_el.innerHTML = `${hours.padStart(2, "0")}`;
	minute_el.innerHTML = `${minutes.padStart(2, "0")}`;
	second_el.innerHTML = `${seconds.padStart(2, "0")}`;

}
const timer = setInterval(log_date, 1000);

// Quote section

function generate_random_quote() {

	const arr_size = quotesArray.length;
	
	const random_num = Math.floor((Math.random() * arr_size));

	quote_textarea.innerHTML = "";
	quote_textarea.innerHTML = quotesArray[random_num];

	show_or_hide_cpy_btn();

}

// copy functionality

async function copy_quote() {
let text = quote_textarea.innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    copy_btn.innerHTML = "Copied!"
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

show_or_hide_cpy_btn();