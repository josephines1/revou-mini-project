document.addEventListener("DOMContentLoaded", function () {
  const switchLink = document.getElementById("switch-link");
  const switchText = switchLink.innerText;

  switchLink.addEventListener("click", function () {
    if (switchText === "Perimeter") {
      switchLink.onclick = openPerimeter();
    } else if (switchText === "Area") {
      switchLink.onclick = openArea();
      console.log("ok");
    } else {
      console.log("You clicked on " + switchText);
    }
  });
});

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function validateInput(inputId, errorId) {
  let inputValue = document.getElementById(inputId).value;
  let errorElement = document.getElementById(errorId);

  if (inputValue.trim() === "" || !isNumeric(inputValue)) {
    errorElement.textContent = "(!) " + inputId + " must be a number";
    return false;
  } else {
    errorElement.textContent = "";
  }
}

function getArea() {
  validateInput("base-input", "base-error");
  validateInput("height-input", "height-error");

  let baseValue = document.getElementById("base-input").value;
  let heightValue = document.getElementById("height-input").value;
  let baseNum = document.getElementById("base-number");
  let heightNum = document.getElementById("height-number");
  let resultNum = document.getElementById("result-number");

  baseValue = baseValue < 0 ? (baseValue *= -1) : baseValue;
  heightValue = heightValue < 0 ? (heightValue *= -1) : heightValue;

  baseNum.innerText = baseValue;
  heightNum.innerText = heightValue;
  resultNum.innerText = (1 / 2) * baseValue * heightValue;
}

function getPerimeter() {
  validateInput("a-input", "a-error");
  validateInput("b-input", "b-error");
  validateInput("c-input", "c-error");

  let aValue = document.getElementById("a-input").value;
  let bValue = document.getElementById("b-input").value;
  let cValue = document.getElementById("c-input").value;
  let aNum = document.getElementById("a-number");
  let bNum = document.getElementById("b-number");
  let cNum = document.getElementById("c-number");
  let resultNum = document.getElementById("result-number");

  aValue = aValue < 0 ? (aValue *= -1) : aValue;
  bValue = bValue < 0 ? (bValue *= -1) : bValue;
  cValue = cValue < 0 ? (cValue *= -1) : cValue;

  aNum.innerText = aValue;
  bNum.innerText = bValue;
  cNum.innerText = cValue;
  resultNum.innerText = parseInt(aValue) + parseInt(bValue) + parseInt(cValue);
}

function reset() {
  let inputs = document.getElementsByTagName("input");
  let numbers = document.getElementsByClassName("number");
  let errors = document.getElementsByClassName("error-message");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].innerText = 0;
  }

  for (let i = 0; i < errors.length; i++) {
    errors[i].innerText = "";
  }
}

function openPerimeter() {
  main.innerHTML = `<div class="container left">
  <!-- TRIANGLE FIGURE -->
  <img
    src="assets/triangle.svg"
    alt="triangle figure"
    class="triangle-figure"
  />

  <!-- Title -->
  <h3 class="title">Perimeter of triangle</h3>

  <!-- SWITCH BUTTON -->
  <p class="switch-button">
    Switch to <a href="#area" id="switch-link" onclick="openArea()">Area</a>
  </p>

  <!-- FORMULA -->
  <div class="formula-group">
    <h2 class="subtitle">Formula</h2>
    <p class="formula">Perimeter = a &plus; b &plus; c</p>
  </div>

  <!-- CALC -->
  <div class="calc-group desktop-right mobile-bottom">
    <!-- SUBTITLE - CALC -->
    <h2 class="subtitle">Count</h2>

    <!-- FORM - CALC -->
    <div class="input-fields">
      <!-- INPUT A -->
      <div class="input-group">
        <div class="label-input">
          <label for="a-input">a</label>
          <input type="number" id="a-input" name="a" value="0" min="0" oninput="validateInput('a-input', 'a-error');" />
        </div>
        <span id="a-error" class="error-message"></span>
      </div>

      <!-- INPUT B -->
      <div class="input-group">
        <div class="label-input">
          <label for="b-input">b</label>
          <input type="number" id="b-input" name="b" value="0" min="0" oninput="validateInput('b-input', 'b-error');" />
        </div>
        <span id="b-error" class="error-message"></span>
      </div>

      <!-- INPUT C -->
      <div class="input-group">
        <div class="label-input">
          <label for="c-input">c</label>
          <input type="number" id="c-input" name="c" value="0" min="0" oninput="validateInput('c-input', 'c-error');" />
        </div>
        <span id="c-error" class="error-message"></span>
      </div>
    </div>

    <!-- COUNT BUTTON -->
    <button class="count-button" onclick="getPerimeter()">Count</button>
  </div>
</div>

<div class="container right">
  <!-- CALC RESULT -->
  <p class="calc-result">
    <strong
      >RESULT <span id="result-number" class="number">0</span></strong
    >
  </p>

  <!-- STEPS -->
  <div class="calc-steps">
    <!-- STEPS BUTTON -->
    <button class="steps-button">Learn the Steps</button>
    <!-- CALC PROCESS -->
    <div class="calc-process">
      <p>P = a &plus; b &plus; c</p>
      <p>
        P =
        <span id="a-number" class="number">0</span> &plus;
        <span id="b-number" class="number">0</span> &plus;
        <span id="c-number" class="number">0</span>
      </p>
    </div>
  </div>

  <!-- RESET BUTTON -->
  <button class="reset-button" onclick="reset()">Reset</button>
</div>`;
}

function openArea() {
  main.innerHTML = `<div class="container left">
  <!-- TRIANGLE FIGURE -->
  <img
    src="assets/triangle.svg"
    alt="triangle figure"
    class="triangle-figure"
  />

  <!-- Title -->
  <h3 class="title">Area of triangle</h3>

  <!-- SWITCH BUTTON -->
  <p class="switch-button">
    Switch to <a href="#perimeter" id="switch-link" onclick="openPerimeter()">Perimeter</a>
  </p>

  <!-- FORMULA -->
  <div class="formula-group">
    <h2 class="subtitle">Formula</h2>
    <p class="formula">Area = 1/2 &#215; base &#215; height</p>
  </div>

  <!-- CALC -->
  <div class="calc-group desktop-right mobile-bottom">
    <!-- SUBTITLE - CALC -->
    <h2 class="subtitle">Count</h2>

    <!-- FORM - CALC -->
    <div class="input-fields">
      <!-- INPUT BASE -->
      <div class="input-group">
        <div class="label-input">
          <label for="base">base</label>
          <input
            type="number"
            id="base-input"
            name="base"
            value="0"
            min="0"
            oninput="validateInput('base-input', 'base-error');"
          />
        </div>
        <span id="base-error" class="error-message"></span>
      </div>

      <!-- INPUT HEIGHT -->
      <div class="input-group">
        <div class="label-input">
          <label for="height">height</label>
          <input
            type="number"
            id="height-input"
            name="height"
            value="0"
            min="0"
            oninput="validateInput('height-input', 'height-error');"
          />
        </div>
        <span id="height-error" class="error-message"></span>
      </div>
    </div>

    <!-- COUNT BUTTON -->
    <button class="count-button" onclick="getArea()">Count</button>
  </div>
</div>

<div class="container right">
  <!-- CALC RESULT -->
  <p class="calc-result">
    <strong
      >RESULT <span id="result-number" class="number">0</span></strong
    >
  </p>

  <!-- STEPS -->
  <div class="calc-steps">
    <!-- STEPS BUTTON -->
    <button class="steps-button">Learn the Steps</button>
    <!-- CALC PROCESS -->
    <div class="calc-process">
      <p>L = 1/2 &#215; b &#215; h</p>
      <p>
        L = 1/2 &#215;
        <span id="base-number" class="number">0</span> &#215;
        <span id="height-number" class="number">0</span>
      </p>
    </div>
  </div>

  <!-- RESET BUTTON -->
  <button class="reset-button" onclick="reset()">Reset</button>
</div>`;
}
