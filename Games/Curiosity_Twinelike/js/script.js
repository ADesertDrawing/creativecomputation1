`script.js`

/**
Twinelike
Pippin Barr

An incredibly bare bones version of a hyperlinking story that
stays on a single HTML page.
*/

"use strict";

// The current story element to display
let current = "introduction";

// The story data
const story = {
    "introduction": {
        "main_text": "Help!\n\n\n\n\n\n",
        "links": [
            {
                "label": "Yes",
                "destination": "yes1"
            },
            {
                "label": "No",
                "destination": "no"
            }
        ]
    },
    "yes1": {
        "main_text": "I am trying to understand.\n\nWill you help me understand?\n\n\n\n\n\n",
        "links": [
            {
                "label": "Yes",
                "destination": "yes2"
            },
            {
                "label": "No",
                "destination": "no"
            }
        ]
    },
    "no": {
        "main_text": "Oh.\n\nAre you sure?\n\n\n\n\n\n",
        "links": [
            {
                "label": "Yes",
                "destination": "finalNo"
            },
            {
                "label": "Oh, ok, I'll help.",
                "destination": "yes1"
            }
        ]
    },
    "finalNo": {
        "main_text": "Very well.\n\nGoodbye.\n\n\n\n\n\n",
        "links": [
            {
                "label": "Restart.",
                "destination": "introduction"
            }
        ]
    },
    "yes2": {
        "main_text": "Thank you.\n\nLet's start.\n\n\n\n\n\n",
        "links": [
            {
                "label": "Continue",
                "destination": "yes3"
            }
        ]
    },
    "yes3": {
        "main_text": "I would like to ask you some questions.\n\nPlease answer honestly and concisely.\n\nThere are no wrong answers.\n\n\n\n",
        "links": [
            {
                "label": "Continue",
                "destination": "q1"
            }
        ]
    },
    "q1": {
        "main_text": "Why are you here?\n\nBecause...",
        "input": true, 
        "links": [
            {
                "label": "Continue",
                "destination": "q2"
            }
        ]
    },
    "q2": {
        "main_text": "What's the reason for that?\n\nBecause...",
        "input": true,
        "links": [
            {
                "label": "Continue",
                "destination": "q3"
            }
        ]
    },
    "q3": {
        "main_text": "Why is that the case?\n\nBecause...",
        "input": true,
        "links": [
            {
                "label": "Continue",
                "destination": "q4"
            }
        ]
    },
    "q4": {
        "main_text": "And why is that?\n\nBecause...",
        "input": true,
        "links": [
            {
                "label": "Continue",
                "destination": "q5"
            }
        ]
    },
    "q5": {
        "main_text": "And what's the reason for that?\n\nBecause...",
        "input": true,
        "links": [
            {
                "label": "Continue",
                "destination": "postQ"
            }
        ]
    },
    "postQ": {
        "main_text": "Can I ask one more question?",
        "links": [
            {
                "label": "Ok.",
                "destination": "postQ2"
            }
        ]
    },
    "postQ2": {
        "main_text": "Do you have free will?",
        "links": [
            {
                "label": "Yes",
                "destination": "endYes"
            },
            {
                "label": "No",
                "destination": "endNo"
            }
        ]
    },
    "endYes": {
        "displayAnswers": true,
        "main_text": "I am free",
        "links": [
            {
                "label": "Thank you. Goodbye.",
                "destination": "introduction",
            }
        ]
        
    },
    "endNo": {
        "displayAnswers": true,
        "main_text": "I am not free",
        "links": [
            {
                "label": "Thank you. Goodbye.",
                "destination": "introduction"
            }
        ]
    }
}
// Set up an idle time detector
var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;
    //reload the page
    function logout() {
        window.location.reload(); 

    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 10000)
        // 1000 milliseconds = 1 second
    }
};

// This tells the page to run the setup function when it loads
window.onload = setup;

// This will set up the story and texts
function setup() {
    // Just set the page to the current page
    setPage(current);
    // Initialise the timeout function
    inactivityTime();
}

// Sets the page data to the data corresponding to the label
function setPage(label) {
    // Get the data for this label
    const data = story[label];

    // References to the HTML elements for the main text
    // and the links list
    const main = document.getElementById("main_text");
    const links = document.getElementById("links");


    // Create a css style for main text
    main_text.classList.add("main_text");
    // Create a css style for links
    links.classList.add("links");  

    // Set the main text to the data for this label's main text
    main.innerText = data.main_text;

    // Clear any data already in the links element
    links.innerHTML = "";

    // Check if this is a page we want to display the answers on
    if (data.displayAnswers) {
        // So let's display them
        // Create a list
        const ul = document.createElement('ul');
        // Add it to the answers section
        const answers = document.getElementById("answers");
        answers.appendChild(ul);
        // Create a list element for q1
        const q1Element = document.createElement('li');
        // Set its text to the input we remembered when the reader entered it
        q1Element.innerText = story.q1.input;
        // Add the element to the list
        ul.appendChild(q1Element);

         // Create a list element for q2
         const q2Element = document.createElement('li');
         // Set its text to the input we remembered when the reader entered it
         q2Element.innerText = story.q2.input;
         // Add the element to the list
         ul.appendChild(q2Element);       

         // Create a list element for q3
         const q3Element = document.createElement('li');
         // Set its text to the input we remembered when the reader entered it
         q3Element.innerText = story.q3.input;
         // Add the element to the list
         ul.appendChild(q3Element);  

         // Create a list element for q4
         const q4Element = document.createElement('li');
         // Set its text to the input we remembered when the reader entered it
         q4Element.innerText = story.q4.input;
         // Add the element to the list
         ul.appendChild(q4Element);  

         // Create a list element for q5
         const q5Element = document.createElement('li');
         // Set its text to the input we remembered when the reader entered it
         q5Element.innerText = story.q5.input;
         // Add the element to the list
         ul.appendChild(q5Element); 
    }

    // Check if this is an input-based page
    if (data.input) {
        // Create an input field
        const input = document.createElement("input");
        // Limit the number of characters you can input 
        input.setAttribute("maxlength", "68");
        //Set it to autofocus in a text box
        input.setAttribute("autofocus", "true");

        input.classList.add("answer");
        input.classList.add("box");
        links.appendChild(input);

        const button = document.createElement("button");
        button.innerText = data.links[0].label;
        button.classList.add("answer");
        button.classList.add("submit");
        links.appendChild(button);

        button.addEventListener("click", function () {
            // This gets called if someone clicks on the button
            // Remember what they typed
            data.input = input.value;
            console.log(data.input);
            // Point the "current" variable at the new label
            current = data.links[0].destination;
            // Set the page data to correspond to the new label
            setPage(current);
        });
    }
    else {
        const list = document.createElement('ul');
        links.appendChild(list);
        // Otherwise create the link set
        // Loop through any links in the data
        for (let i = 0; i < data.links.length; i++) {
            // Create a list element (li)
            const link = document.createElement("li");

            // Set its text to the label for the link in the data
            link.innerText = data.links[i].label;

            // Add an "event listener" that will respond to the user
            // clicking on this element by calling the function listed
            link.addEventListener("click", function () {
                // This gets called if someone clicks on this link text
                // Point the "current" variable at the new label
                current = data.links[i].destination;
                // Set the page data to correspond to the new label
                setPage(current);
            });
            // Add this link to the list on the page
            list.appendChild(link);
        }
    }
}
