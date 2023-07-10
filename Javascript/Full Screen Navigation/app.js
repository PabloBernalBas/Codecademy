//menu
const menu = document.querySelector('.menu'); // Selects the element with class "menu" from HTML

//links
const links = document.querySelectorAll('li'); // Selects all the <li> elements from HTML

//highlight
const highlight = document.querySelector('.highlight'); // Selects the element with class "highlight" from HTML

//btn
const btn = document.querySelector('.btn'); // Selects the element with class "btn" from HTML

btn.addEventListener('click', function() {
    // Event listener for the click event on the button

    if (this.dataset.open === 'close') {
        // Checks if the 'open' attribute of the clicked button is set to 'close'

        menu.style.clipPath = 'circle(100% at 50% 50%)'; // Applies a circular clipping path to the menu
        this.dataset.open = 'open'; // Updates the 'open' attribute of the clicked button to 'open'
    } else {
        menu.style.clipPath = ''; // Removes the clipping path from the menu
        this.dataset.open = 'close'; // Updates the 'open' attribute of the clicked button to 'close'
        highlight.style = ';'; // Clears the style attribute of the highlight element
    }
});

links.forEach((Link) => {
    // Loops through each link in the links NodeList

    Link.addEventListener('pointerover', function() {
        // Event listener for the pointerover event on each link

        const w = this.offsetWidth, // Width of the link element
              h = this.offsetHeight, // Height of the link element
              t = this.offsetTop; // Top offset of the link element relative to its offset parent

        highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px`;
        // Applies CSS styles to the highlight element to position it below the hovered link
    });
});


/*
The JavaScript code connects with HTML by selecting specific elements using CSS selectors 
(.menu, li, .highlight, and .btn). 
It also connects with CSS by modifying the style property of the selected elements 
(menu.style.clipPath, highlight.style, and highlight.style.cssText). 
These modifications affect the visual appearance and behavior of the elements on the webpage.
*/