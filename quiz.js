// JavaScript code for the Simple Calculator
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const clearBtn = document.getElementById("clear-btn");
const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const answerContainer = document.getElementById("answer-container");

addBtn.addEventListener("click", function() {
	const result = Number(operand1.value) + Number(operand2.value);
	answerContainer.innerHTML = ` ${result}`;
	answerContainer.style.display = "block";
});

subtractBtn.addEventListener("click", function() {
	const result = Number(operand1.value) - Number(operand2.value);
	answerContainer.innerHTML = ` ${result}`;
	answerContainer.style.display = "block";
});

clearBtn.addEventListener("click", function() {
	operand1.value = "";
	operand2.value = "";
	answerContainer.style.display = "none";
});