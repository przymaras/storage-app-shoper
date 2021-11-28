import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fontawesome";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// remove all lines below as soon as possible!!!
// remove all lines below as soon as possible!!!
// remove all lines below as soon as possible!!!

const toolsBtn = document.getElementById("nav-tools-open-btn");
const modulesBtn = document.getElementById("nav-modules-open-btn");
const navTools = document.getElementById("nav-tools");
const navModules = document.getElementById("nav-modules");
const filterForm = document.getElementById("filter");
const filterOptToggleBtn = document.getElementById("filter-options-toggle-btn");
const filterOptions = document.getElementById("filter-options");

let buttonsGroups = document.getElementsByClassName("nav-buttons-group");
buttonsGroups = [...buttonsGroups]; // convert HTML collection to array

let buttons = document.getElementsByClassName("nav-btn");
buttons = [...buttons]; // convert HTML collection to array

toolsBtn.addEventListener("click", (e) => {
  toggleNavTools();
  hideNavModules();
});

modulesBtn.addEventListener("click", (e) => {
  toggleNavModules();
  hideNavTools();
});

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

filterOptToggleBtn.addEventListener("click", (e) => toggleFilterOptions());

buttonsGroups.forEach((e) =>
  e.addEventListener("click", () => {
    foldAllButtonGroups();
    setButtonsGroupsHeights();
    e.classList.remove("buttons-group-folded");
  })
);

buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    foldAllButtonGroups();
    console.log("clicked!");
  })
);

// =============================

function foldAllButtonGroups() {
  buttonsGroups.forEach((element) => {
    if (!element.classList.contains("buttons-group-folded")) {
      element.classList.add("buttons-group-folded");
    }
  });
}

function toggleNavTools() {
  if (navTools.classList.contains("hide-overlay")) {
    navTools.classList.remove("hide-overlay");
  } else {
    navTools.classList.add("hide-overlay");
  }
}

function toggleFilterOptions() {
  if (filterOptions.classList.contains("filter-options-folded")) {
    filterOptions.classList.remove("filter-options-folded");
  } else {
    filterOptions.classList.add("filter-options-folded");
  }
}

function hideNavTools() {
  if (!navTools.classList.contains("hide-overlay")) {
    navTools.classList.add("hide-overlay");
  }
}

function toggleNavModules() {
  if (navModules.classList.contains("hide-overlay")) {
    navModules.classList.remove("hide-overlay");
  } else {
    navModules.classList.add("hide-overlay");
  }
}

function hideNavModules() {
  if (!navModules.classList.contains("hide-overlay")) {
    navModules.classList.add("hide-overlay");
  }
}

function setButtonsGroupsHeights() {
  //calculate height of class elements .nav-buttons-group
  //for CSS transition height proper working

  const groupContainerHeight =
    [...buttonsGroups[0].children][0].scrollHeight + 6;
  const buttonHeightWithMargin = buttons[0].offsetHeight + 8;

  buttonsGroups.forEach(
    (buttonsGroup) =>
      (buttonsGroup.style.height = `${
        groupContainerHeight +
        [...[...buttonsGroup.children][1].children].length *
          buttonHeightWithMargin
      }px`)
  );
}

setButtonsGroupsHeights();

const rowHTML = `<div class="module--row">
<div class="cell">
  <input type="checkbox" name="row-title" id="row-1-checkbox" />
</div>
<div class="cell" id="">
  KONWERTER USB - RS232 UART FT232RL FTDI
</div>
<div class="cell" id="">szt.</div>
<div class="cell" id="">1000</div>
<div class="cell" id="">1000</div>
<div class="cell" id="">1000</div>
<div class="cell" id="">${window.innerHeight}</div>
<div class="cell" id="">22,35</div>
<div class="cell" id="">10001</div>
<div class="cell" id="">TME Sp z o.o.</div>
<div class="cell" id="">CB-HFT6.4/1M-RD</div>
<div class="cell" id="">Surowiec</div>
<div class="cell" id="">MODUŁY</div>
<div class="cell" id="">Długi termin</div>
</div>`;

let rowsHTML = "";

for (let i = 0; i < 50; i++) {
  rowsHTML += rowHTML;
}

document.getElementById("module-container").innerHTML += rowsHTML;
