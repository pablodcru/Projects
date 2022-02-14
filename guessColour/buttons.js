

function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
                        'background-color: rgb('+red+','+green+','+blue+');'
                        );
}

let buttons = document.getElementsByClassName('colourButton');

setButtonColour(buttons[0], 0, 0, 255);