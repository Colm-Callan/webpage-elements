console.log("Client-Side Web Development graded assignment submitted by Colm Callan")
let start = 7
let end = 2
function ranNum() {
let x = Math.floor((Math.random()) * start) + end
    console.log(x)
    console.log('and the lucky number is ' + (x))
}
ranNum(start, end)
//week4
let onestring = ""
//function adds 1 to onesting and updates innerhtml of element ("changeone")
function ChangeOne(){
    onestring += 1
    document.getElementById("changeone").innerHTML = onestring;
}
//converts textcontent to upper
function Upper(){
    document.getElementById("para").textContent = document.getElementById("para").textContent.toUpperCase()
}
//week5
let oldParaEle = document.getElementById("para")
let oldPara = oldParaEle.textContent
function ModPara(){
    let inputString = document.getElementById("textArea").value
    if (inputString != ""){
        document.getElementById("para").innerHTML = inputString
        updateVowelCountTable(); //Week10
    }
}

function getRandomColor() {
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"; 
}

function changeColor(){
    let bgColor = document.getElementById("inputColor").value

    if (bgColor){
        document.body.style.backgroundColor = bgColor
    }else{
        document.body.style.backgroundColor = getRandomColor()
    }
}
//week6
//text content is all txt contained by a element
function removeLastWord() {
    let para = document.getElementById("para");
    let text = para.textContent;
//splits into array of words
    let words = text.split(" ");

    if (words.length > 0) {
        words.pop();
//adss words left back into string
    let newText = words.join(" ");
//updates textcontent of para using new stirng
    para.textContent = newText;
    updateVowelCountTable(); //Week10
    }
}
function replaceBorderedElemenet(text){
    let border = document.querySelectorAll(".border");
//replace textcontent of each element with given text
    for(let newText of border) {
        newText.textContent = text;
    }
    updateVowelCountTable(); // Week10
}
//week7
function onMouseEnter(event) {
    event.target.style.backgroundColor = 'red';
}

function onMouseLeave(event) {
//reset to default colour
    event.target.style.backgroundColor = '';
}

const buttons = document.querySelectorAll('button');
//for each button adds to events
buttons.forEach((button) => {
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);
});
//week8
//array
let buttonDescriptions = [
    "Adds a digit 1 to button one",
    "Changes the text of the long paragraph to uppercase characters",
    "Modifies the text of the long paragraph",
    "Changes the background to the specified colour, or to a random colour",
    "Changes the textual content of the bordered elements"
];
//empty obj
let buttonDescriptionMap = {};
//populates empty obj with buton and associated desc
function populateButtonDescriptionMap() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
        buttonDescriptionMap[button.textContent] = buttonDescriptions[index];
    });
}
//loads on page load is full loaded  (dom = document object model// page ready to be manipulated by js)
document.addEventListener('DOMContentLoaded', function() {
    populateButtonDescriptionMap();
    updateVowelCountTable(); // Week10

    let descriptionSpan = document.getElementById('descSpan');
//adss events for whenn mouses enter and dispalys the textcontent of the button desc
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            descriptionSpan.textContent = buttonDescriptionMap[button.textContent];
        });
//wehn mouse leaves desc is removed from page
        button.addEventListener('mouseleave', function() {
            descriptionSpan.textContent = '';
        });
    });
});

//week9
function get_shuffled_indices(n) { 
    const a = Array(n).fill().map((e, i) => i); 
    for (let l = n; l > 0; --l) { a.push(a.splice(Math.floor(Math.random() * l), 1)[0]); }
    return a;
}
// Function suffles rows
function shuffleRows() {
// Get the container div + elements
    const container = document.querySelector('.container-fluid');

// Gets all the rows on the page
    const Rows = document.querySelectorAll('.row');
// Shuffle the rows to make the mrandom
    const shuffledIndices = get_shuffled_indices(Rows.length);
// loop and shuffled indices and change spot on page
    shuffledIndices.forEach((index, i) => {
        container.insertBefore(Rows[index], container.children[i]);
    });
}
document.addEventListener('keydown', function () {
// Calls the function to shuffle rows
    shuffleRows();
});

//week10
//count the number of vowels in a given para
function countVowels(text) {
    const vowels = "aeiou";
    let count = 0;
// Iterates over each character in the input string and 
    for (let char of text) {
        //uses include method to check if its a vowl and cpunts if it is
        if (vowels.includes(char)) {
            count++;
        }
    }
    //retuns final num of vowels
    return count;
}

// Function to update the table
function updateVowelCountTable() {
    //takes paragraph and makes it all lower case
    let paraText = document.getElementById("para").textContent.toLowerCase();
    const vowels = "aeiou";

    // Iterate over vowels and update the table cells with the vowel counts
    for (let vowel of vowels) {
        //gives the ammount of certain vowel and -1 because array starts at 0
        let count = paraText.split(vowel).length - 1;
        //updates table with the right info
        document.getElementById(vowel + 'Count').textContent = count;
    }
}


