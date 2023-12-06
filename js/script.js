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
  let baseValue = document.getElementById("base-input").value;
  let heightValue = document.getElementById("height-input").value;
  let baseNum = document.getElementById("base-number");
  let heightNum = document.getElementById("height-number");
  let resultNum = document.getElementById("result-number");

  if (!validateInput("base-input", "base-error")) {
    baseValue = 0;
  }

  if (!validateInput("height-input", "height-error")) {
    heightValue = 0;
  }

  baseValue = baseValue < 0 ? (baseValue *= -1) : baseValue;
  heightValue = heightValue < 0 ? (heightValue *= -1) : heightValue;

  baseNum.innerText = baseValue;
  heightNum.innerText = heightValue;
  resultNum.innerText = (1 / 2) * baseValue * heightValue;
}

function getCircum() {
  let aValue = document.getElementById("a-input").value;
  let bValue = document.getElementById("b-input").value;
  let cValue = document.getElementById("c-input").value;
  let aNum = document.getElementById("a-number");
  let bNum = document.getElementById("b-number");
  let cNum = document.getElementById("c-number");
  let resultNum = document.getElementById("result-number");

  if (!validateInput("a-input", "a-error")) {
    aValue = 0;
  }

  if (!validateInput("b-input", "b-error")) {
    bValue = 0;
  }

  if (!validateInput("c-input", "c-error")) {
    cValue = 0;
  }

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

function openCircum() {
  main.innerHTML = `<div class="container left">
  <!-- TRIANGLE FIGURE -->
  <img
    src="assets/triangle.svg"
    alt="triangle figure"
    class="triangle-figure"
  />

  <!-- NAVIGATION -->
  <nav class="navigation-group">
    <button id="area-button" onclick="openArea()" class="nav-button">Area</button>
    <button id="circum-button" onclick="openCircum()" class="nav-button active" >Circumference</button>
  </nav>

  <!-- FORMULA -->
  <div class="formula-group">
    <h2 class="title">Formula</h2>
    <h3 class="subtitle">Circumference of triangle</h3>
    <p class="formula">C = a &plus; b &plus; c</p>
    <div class="formula-note">
      <p>Where:</p>
      <p>C = <i>circumference</i></p>
      <p>a, b, and c = <i>sides</i></p>
    </div>
  </div>
</div>

<div class="container right">
  <!-- CALC -->
  <div class="calc-group desktop-right mobile-bottom">
    <!-- TITLE - CALC -->
    <h2 class="title">calc</h2>

    <!-- SUBTITLE - CALC -->
    <h3 class="subtitle">Enter the value of each side of the triangle</h3>

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
    <button class="count-button" onclick="getCircum()">Count</button>

    <!-- CALC PROCESS -->
    <div class="calc-process">
      <p>C = a &plus; b &plus; c</p>
      <p>
        C =
        <span id="a-number" class="number">0</span> &plus;
        <span id="b-number" class="number">0</span> &plus;
        <span id="c-number" class="number">0</span>
      </p>
    </div>

    <!-- SUBTITLE - CALC -->
    <p class="calc-result">
      <strong
        >CIRCUMFERENCE: <span id="result-number" class="number">0</span></strong
      >
    </p>

    <!-- RESET BUTTON -->
    <button class="reset-button" onclick="reset()">Reset</button>
  </div>
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

  <!-- NAVIGATION -->
  <nav class="navigation-group">
    <button id="area-button" onclick="openArea()" class="nav-button active">Area</button>
    <button id="circum-button" onclick="openCircum()" class="nav-button" >Circumference</button>
  </nav>

  <!-- FORMULA -->
  <div class="formula-group">
    <h2 class="title">Formula</h2>
    <h3 class="subtitle">Area of triangle</h3>
    <p class="formula">A = 1/2 &#215; b &#215; h</p>
    <div class="formula-note">
      <p>Where:</p>
      <p>A = <i>area</i></p>
      <p>b = <i>base</i></p>
      <p>h = <i>height</i></p>
    </div>
  </div>
</div>

<div class="container right">
  <!-- CALC -->
  <div class="calc-group desktop-right mobile-bottom">
    <!-- TITLE - CALC -->
    <h2 class="title">calc</h2>

    <!-- SUBTITLE - CALC -->
    <h3 class="subtitle">Enter the base and height values</h3>

    <!-- FORM - CALC -->
    <div class="input-fields">
      <!-- INPUT BASE -->
      <div class="input-group">
        <label for="base">base</label>
        <input
          type="number"
          id="base-input"
          name="base"
          value="0"
          min="0"
        />
      </div>

      <!-- INPUT HEIGHT -->
      <div class="input-group">
        <label for="height">height</label>
        <input
          type="number"
          id="height-input"
          name="height"
          value="0"
          min="0"
        />
      </div>
    </div>

    <!-- COUNT BUTTON -->
    <button class="count-button" onclick="getArea()">Count</button>

    <!-- CALC PROCESS -->
    <div class="calc-process">
      <p>L = 1/2 &#215; b &#215; h</p>
      <p>
        L = 1/2 &#215;
        <span id="base-number" class="number">0</span> &#215;
        <span id="height-number" class="number">0</span>
      </p>
    </div>

    <!-- SUBTITLE - CALC -->
    <p class="calc-result">
      <strong
        >AREA: <span id="result-number" class="number">0</span></strong
      >
    </p>

    <!-- RESET BUTTON -->
    <button class="reset-button" onclick="reset()">Reset</button>
  </div>
</div>`;
}
