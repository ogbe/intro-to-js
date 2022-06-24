// Select the paragraphs to show the respective content and save them to variables
const myName = document.getElementById("name");
const myHeight = document.getElementById("height");
const myCountry = document.getElementById("country");

// Create a function to insert the values to their respective paragraphs
const insertValues = () => {
    myName.innerHTML = `My name is Jude.`;
    myHeight.innerHTML = `I am 6 feet.`;
    myCountry.innerHTML = `I am from Nigeria.`;
}

// Run the function
insertValues();