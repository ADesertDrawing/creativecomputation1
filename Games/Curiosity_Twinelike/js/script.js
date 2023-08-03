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
        "main_text": "Help",
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
        "main_text": "I am trying to understand. Will you help me understand?",
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
        "main_text": "Oh. Are you sure?",
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
        "main_text": "Very well. Goodbye.",
        "links": [
            {
                "label": "Restart.",
                "destination": "introduction"
            }            
        ]
    },
}

// This tells the page to run the setup function when it loads
window.onload = setup;

// This will set up the story and texts
function setup() {
    // Just set the page to the current page
    setPage(current);
}

// Sets the page data to the data corresponding to the label
function setPage(label) {
    // Get the data for this label
    const data = story[label];

    // References to the HTML elements for the main text
    // and the links list
    const main = document.getElementById("main_text");
    const links = document.getElementById("links");

    // Set the main text to the data for this label's main text
    main.innerText = data.main_text;

    // Clear any data already in the links element
    links.innerHTML = "";

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
        links.appendChild(link);
    }
}
