function renderArray(arr) {
  const container = document.getElementById("array-container");
  container.innerHTML = "";

  arr.forEach(value => {
    const bar = document.createElement("div");
    bar.style.height = value * 3 + "px";
    bar.classList.add("bar");

    // Create number label
    const label = document.createElement("span");
    label.innerText = value;
    label.classList.add("label");

    bar.appendChild(label);
    container.appendChild(bar);
  });
}
