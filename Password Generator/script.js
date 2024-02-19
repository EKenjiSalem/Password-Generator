const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
".","?","/"];

let btngen = document.getElementById("gen-btn");
let randomp1 = document.getElementById("random-1");
let randomp2 = document.getElementById("random-2");
let copyword = document.querySelectorAll(".copy-password");
let toggler = document.getElementById("toggle");
let container = document.getElementById("container-box");
let color = document.querySelectorAll('.color-change')

// Dark/Light Toggle Button
toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    container.classList.toggle('active');
    randomp1.classList.toggle('active');
    randomp2.classList.toggle('active');
    color.forEach(element => {
        element.classList.toggle('active');
    });
});


// Random Password Generator 
btngen.addEventListener('click', () => {
  let randomString = '';
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
}
    randomp1.textContent = randomString;
    randomp2.textContent = randomString;
});


// Copy to Clipboard
function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => { 
        alert("Copied to clipboard!");
      })
  }
  
  copyword.forEach( copyindex => {
    copyindex.addEventListener("click", () => {
      const textToCopy = copyindex.textContent;
      copyTextToClipboard(textToCopy);
    });
  });







