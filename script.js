let array = [];
let steps = [];
let currentStep = 0;
let speed = 50;

// Generate random array
function generateArray() {
  array = [];
  for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  renderArray(array);
}

// Render bars
function renderArray(arr) {
  const container = document.getElementById("array-container");
  container.innerHTML = "";

  arr.forEach(value => {
    const bar = document.createElement("div");
    bar.style.height = value * 3 + "px";
    bar.classList.add("bar");
    container.appendChild(bar);
  });
}

// Bubble sort steps
function bubbleSortSteps(arr) {
  let a = [...arr];
  let steps = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        steps.push([...a]);
      }
    }
  }
  return steps;
}

// Start sorting
function startBubble() {
  steps = bubbleSortSteps(array);
  currentStep = 0;
}

// Next step
function nextStep() {
  if (currentStep < steps.length) {
    renderArray(steps[currentStep]);
    currentStep++;
  }
}

// Previous step
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderArray(steps[currentStep]);
  }
}

// Speed control
document.getElementById("speed").addEventListener("input", (e) => {
  speed = 101 - e.target.value;
});