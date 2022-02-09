const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);          // ne equivoque al principio y puse click, y eso es cuando bajamos y estan lascondiciones para aparecer, si hacemos click aparece, interesatte tb

checkBoxes()            // lo inicializamos pq sino empiezan a aparecer cuando hacemos scroll

function checkBoxes() {
    const triggerBottom = window.innerHeight / 1.2          // el disparo apra q aparezcan sera cuando bajemos hasta el 80/ de la página

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show")
        }
    })


}