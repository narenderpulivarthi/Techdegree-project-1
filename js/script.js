/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * created an array 'quotes'
 * 10 objects are included in the array.
 * objects consists of properties like 'quote', 'source', 'citation', 'tags' along with their values.
***/
const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela'
  },
  {
    quote: 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.',
    source: 'Albert Einstein'
  },
  {
    quote: 'Whether you’re sad, you’re a mess, or you’ve hit rock bottom, you still have TO PLAY! That’s how people like us survive',
    source: 'Kaori Miyazono',
    citation: 'Your Lie in April',
    tags: ['Motivational', 'Life']
  },
  {
    quote: 'The unexamined life is not worth living',
    source: 'Socrates',
    citation: 'Apology',
    tags: ['Philosophy', 'Life', 'Reason']
  },
  {
    quote: 'with great power comes great responsibility',
    source: 'Uncle Ben',
    citation: 'Spider-man movie',
    year: 2002,
    tags: [' Motivational', 'Power']
  },
  {
    quote: 'You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.',
    source: 'Mahatma Gandhi',
    citation: 'Letters of Gandhi',
    year: 1947,
    tags: ['Hope', 'Humanity']
  },
  {
    quote: 'Earth provides enough to satisfy every man\'s needs, but not every man\'s greed.',
    source: 'Mahatma Gandhi'
  },
  {
    quote: 'It is not our abilities that show what we truly are… it is our choices.',
    source: ' – Dumbledore',
    citation: 'Harry Potter and the Chamber of Secrets',
    year: 2002,
    tags: ['Reason', 'Choices']
  },
  {
    quote: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    source: 'Buddha',
    tags: ['Mind','Concentration']

  }
];



/***
 * create 'getRandomQuote' function
***/
function getRandomQuote() {
 let randomQuote = Math.floor(Math.random() * quotes.length);  // generates and stores the random index number of the object
 return quotes[randomQuote]; // accessing the Properties of the object based on index number
}

/***
 * create 'getRandomColor' function
 * Modified and improved from the Syntax source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
***/
function getRandomColor() {
  let color = () => Math.floor(Math.random() * 256); 
  let getColor = `rgb( ${color()}, ${color()}, ${color()} )`; // generates a random color and stores it.
  return getColor;
}


/***
 *Create a printQuote function
 *Create a variable named html and assigned the string through conditonal statements and concatenation
***/
function printQuote() {
  
  let rQuote = getRandomQuote(); // accessing the Properties of the object for the function
  
  let html = 
   `<p class="quote">${rQuote.quote}</p>
    <p class="source">${rQuote.source}`

    if(rQuote.citation){
     html +=  `<span class="citation">${rQuote.citation}</span> `;
    }

    if(rQuote.year){
      html += `<span class="year">${rQuote.year} </span>`;
    }

    if(rQuote.tags){
      html += `<span>, tags: ${rQuote.tags.join(', ')} </span>`;
    }
    html += `</p>`;
 
  document.getElementById('quote-box').innerHTML = html; // Generates random quote on the web page

  document.body.style.backgroundColor = getRandomColor(); // Generates random color when the 'getRandomcolor' is called
}
 
/***
  * created 'setTime' function
  * Syntax source of setInterval method: https://www.w3schools.com/js/js_timing.asp
  * Syntax source of setInterval method: FSJS Project Instructions; Project 1 - Random Quote Generator
***/
 
function setTime() { 
   printQuote();
}
setInterval(setTime, 10000); // set timer to 10 sec to generate random quote and color automatically


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
