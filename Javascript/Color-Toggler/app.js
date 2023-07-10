let toggler = document.getElementById('switch')

toggler.addEventListener('click', () => {

    toggler.checked === true 
    ? (document.body.style.backgroundColor = 'black')
    : (document.body.style.backgroundColor = 'white');

    //Other way to create the function for the button

    /* if(toggler.checked === true) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
    }

    */
    console.log(toggler,checked);
})