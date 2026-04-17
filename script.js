let array = [];
let steps = [];
let currentStep = 0;
let speed = 50;

// Generate random array
function generateArray() {
  array = [];
  for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100) + 10);
  }
  renderArray({ array: array });
}

// Render bars
function renderArray(step) {
  const container = document.getElementById("array-container");
  container.innerHTML = "";

  step.array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.style.height = value * 3 + "px";
    bar.classList.add("bar");

    // Highlight active bars
    if (step.active && step.active.includes(index)) {
      bar.style.backgroundColor = "red";
    } else {
      bar.style.backgroundColor = "blue";
    }

    // Add number label
    const label = document.createElement("span");
    label.innerText = value;
    bar.appendChild(label);

    container.appendChild(bar);
  });
}

// Bubble sort with steps
function bubbleSortSteps(arr) {
  let a = [...arr];
  let steps = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {

      // Highlight comparison
      steps.push({
        array: [...a],
        active: [j, j + 1]
      });

      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];

        steps.push({
          array: [...a],
          active: [j, j + 1]
        });
      }
    }
  }
  return steps;
}

// Start sorting
function startBubble() {
  steps = bubbleSortSteps(array);
  currentStep = 0;
  showComplexity();
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

// Auto play
function play() {
  let interval = setInterval(() => {
    if (currentStep >= steps.length) {
      clearInterval(interval);
    } else {
      renderArray(steps[currentStep]);
      currentStep++;
    }
  }, speed);
}

// Speed control
document.getElementById("speed").addEventListener("input", (e) => {
  speed = 101 - e.target.value;
});

// Show complexity
function showComplexity() {
  document.getElementById("complexity").innerText =
    "Bubble Sort Time Complexity: O(n²)";
}
