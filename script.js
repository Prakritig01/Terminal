let charElem = document.querySelector("#info");
let charContent = charElem.textContent;
const secondLine = document.querySelector(".second-line");
const secondLineText = document.querySelector("#text2");
const thirdLine = document.querySelector(".third-line");
const forthLine = document.querySelector(".forth-line");
const fifthLine = document.querySelector(".fifth-line");
const inputField = document.querySelector("#help");

//nextpage

const greetings = [
  "Namaste (Hindi)!",
  "Annyeonghaseyo (Korean)!",
  "Konnichiwa (Japanese)!",
  "Salam (Arabic)!",
  "Hola (Spanish)!",
  "Bonjour (French)!",
  "Hallo (German)!",
  "Ciao (Italian)!",
  "Privet (Russian)!",
  "Olá (Portuguese)!",
  "Merhaba (Turkish)!",
  "Ni hao (Chinese)!",
  "Sawadee (Thai)!",
  "Xin chào (Vietnamese)!",
  "Hello (English)!",
  "Salam (Persian)!",
  "Jambo (Swahili)!",
  "Selamat (Malay/Indonesian)!",
  "Sawa dee (Lao)!",
];

let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const secondPageSecondLine = document.querySelector(".second-page-second-line");
let secondPageSecondPara = document.querySelector("#second-page-second-para");
let stringToBeChanged = secondPageSecondPara.textContent;
let stringToBeChanged2 = stringToBeChanged
  .replace("Saluton (Esperanto)!", "")
  .trim();

let secondPageSecondParaTextContent = `${randomGreeting} ${stringToBeChanged2}`;

const secondPageThirdLine = document.querySelector(".second-page-third-line");
const inputField2 = document.querySelector("#help2");
let timeIntervalVar = 50;

//background color gradient
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setBackgroundColor() {
  const angle = Math.round(Math.random() * 30) + 10; //angle between 10 to 40
  const color1 = getRandomColor();
  // console.log(color1);
  const color2 = getRandomColor();
  // console.log(color2);
  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  const container = document.querySelector(".container");
  container.style.background = gradient;
}

//fourth-line char by char aaaey

const cursorElem1 = document.createElement("span");
cursorElem1.innerHTML = "_";
cursorElem1.className = "cursor";

const cursorElem2 = document.createElement("span");
cursorElem2.innerHTML = "_";
cursorElem2.className = "cursor";

function printCharByChar(content, element, timeIntervalVar, cursor) {
  let i = 0;
  element.textContent = "";
  element.appendChild(cursor);

  const interval = setInterval(() => {
    if (i < content.length) {
      element.textContent = element.textContent.slice(0, -1);
      element.innerHTML += content[i]; // Update the text content and remove the cursor
      i++;
      element.appendChild(cursor); // Re-append the cursor
    } else {
      clearInterval(interval); // Stop the interval when done
    }
  }, timeIntervalVar); // Adjust the interval time as needed

  cursor.classList.add("blink");
}

//fifth line ko vidible karne ke liye
setTimeout(() => {
  console.log("print char by char ke baad vaala timeout");
  makeVisible(fifthLine);
  inputField.select();
  console.log("cursor invisible phele vala?");
  makeInvisible(cursorElem1);
}, 4000);

//2 sec baad mera nextpage function active ho jaaaey
setTimeout(() => {
  console.log("cursor visible doosra vaala?");
  makeVisible(cursorElem2);
  secondPage();
}, 5000);

// function whwn clicked on help mera content gayab ho jaaey
function hideContent() {
  secondLineText.textContent = "Executed Command: help";
  thirdLine.style.display = "none";
  forthLine.style.display = "none";
  fifthLine.style.display = "none";
}

function hideContent2(inputField2Value) {
  console.log("inputField2Value in hideContent2", inputField2Value);
  secondLineText.textContent = `Executed Command: ${inputField2Value}`;
  secondPageSecondLine.style.display = "none";
  secondPageThirdLine.style.display = "none";
}

function makeVisible(element) {
  element.style.visibility = "visible";
}

function makeInvisible(element) {
  element.style.visibility = "hidden";
}

function secondPage() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      hideContent();
      makeVisible(secondPageSecondLine);
      timeIntervalVar = 20;
      printCharByChar(
        secondPageSecondParaTextContent,
        secondPageSecondPara,
        timeIntervalVar,
        cursorElem2
      );
      // makeInvisible(cursorElem2);
      setTimeout(() => {
        console.log("print char by char ke baad vaala timeout");
        makeVisible(secondPageThirdLine);
        inputField2.select();
        console.log("cursor invisible doosra vala?");
        makeInvisible(cursorElem2);
        nextStep();
      }, 7000);
    }
  });
}

function nextStep() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let inputField2Value = inputField2.value;
      console.log("value is : ", inputField2Value);

      hideContent2(inputField2Value);
      executeCommand(inputField2Value);
    }
  });
}

function executeCommand(command) {
  switch (true) {
    case command === "help":
      
  }
}

printCharByChar(charContent, charElem, timeIntervalVar, cursorElem1);
setBackgroundColor();
