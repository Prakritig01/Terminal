
//background color gradient
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function setBackgroundColor(){
    const angle = Math.round(Math.random() *30) + 10; //angle between 10 to 40
    const color1 = getRandomColor();
    // console.log(color1);
    const color2 = getRandomColor();
    // console.log(color2);
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    const container = document.querySelector(".container");
    container.style.background = gradient;
};


//fourth-line char by char aaaey
let charElem = document.querySelector("#info");
let charContent = charElem.textContent;

const cursor = document.createElement('span');
cursor.innerHTML='_';
cursor.className = 'cursor';


function printCharByChar(charContent){
    let i = 0;
    charElem.textContent = "";
    charElem.appendChild(cursor);
   

    const interval = setInterval(() => {
        if (i < charContent.length) {
            // console.log("before slicing");
            // console.log(charElem.textContent);
            charElem.textContent = charElem.textContent.slice(0, -1);

            // console.log("after slicing");
            // console.log(charElem.textContent);

            charElem.innerHTML += charContent[i]; // Update the text content and remove the cursor
            i++;
            charElem.appendChild(cursor); // Re-append the cursor
        } else {
            clearInterval(interval); // Stop the interval when done
        }
    }, 100); // Adjust the interval time as needed
    
   cursor.classList.add('blink');
   document.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        const fifthLine = document.querySelector(".fifth-line");
        const inputField = document.querySelector("#help");
        console.log(inputField);


        fifthLine.style.visibility= 'visible';
        // inputField.focus();
        inputField.select();
    };
   })
}

















printCharByChar(charContent);
setBackgroundColor();

