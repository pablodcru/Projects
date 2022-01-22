//Start by making a variable for the button and telling JavaScript to get the element from the HTML document that has the Id add-button.

let addButton = document.querySelector('#add-button');

//Now connect your button to a event listener, so JavaScript will ‘listen’ for a particular kind of event and then run a function when it ‘hears’ it. In this case, the event is a click. Do this with the addEventListener function, like this:

addButton.addEventListener("click", addToDo);

//This listener will wait for a click on addButton, and when it ‘hears’ the click, it will react by running the addToDoItem function. Of course, it won’t work just yet, since you haven’t written an addToDoItem function yet!
//Later in the project you’ll be writing code for your functions so that they add to-do items, clear the list, save it, etc. But for now, you just want to check that you’ve connected your event listeners properly.
//Create your addToDoItem function so that it will pop up an alert message telling the user which button they’ve clicked.


function addToDo() {
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

//Now connect the other three buttons so clicking them sends an alert:

let clearButton = document.querySelector('#clear-button');
let emptyButton = document.querySelector('#empty-button');
let saveButton = document.querySelector('#save-button');

clearButton.addEventListener("click", clearToDo);
emptyButton.addEventListener("click", emptyToDo);
saveButton.addEventListener("click", saveToDo);

function clearToDo() {

    let completedItems = toDoList.getElementsByClassName("completed");                  //NO SE PQ USANDO QUERYSELECTOR NO FUNCIONA

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyToDo() {
    let toDoItems =toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

function saveToDo() {
    let toDos = [];

    for (let i = 0; i < toDoList.children.length; i++) {
        let toDo = toDoList.children.item(i);

        let toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);
    }
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

//The page came with the <ol> ordered list, so you just need to write some JavaScript to add <li> tags for each new to-do item. The user should be able to enter text in the box on the page, and then click the Add button to see it appear on the list as a numbered item.

let toDoEntryBox = document.querySelector('#todo-entry-box');
let toDoList = document.querySelector('#todo-list');

/*Now you can easily access the box and the list from inside your program.

Create a function called newToDoItem to add an item to the list. This function will need to know two things:

What is the text of the item?
Should the item be marked as completed?
Of course, no new to-do item would ever be complete, but you’re planning ahead here: you’ll be able to use the same function again when you’re loading a saved list that has some completed items on it!*/



function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    //creates an li element to use as your new list item.

    var toDoText = document.createTextNode(itemText);
    //creates a text node — a special container for text that you want to put inside a HTML element using JavaScript — and fills it with the contents of the itemText variable that is passed into the function.

    toDoItem.appendChild(toDoText);
    //takes the element, or text node, that you pass to it (in this case toDoText), and puts it inside toDoItem. If there are already elements inside that one, the one you’re adding now will be last.

    if (completed) {
        toDoItem.classList.add("completed");
    }

    //checks if the value for the completed variable that was passed to newToDoItem is true. If it is, then it will add the class completed to the li element, which will change how it looks on the page. In style.css, there are special styling rules for li tags with the completed class in style.css — check them out, and change them if you like!

    toDoList.appendChild(toDoItem);
    //puts toDoItem (the <li> element) inside of toDoList (the <ol> element).

    toDoItem.addEventListener("dblclick", toggleToDoItemState);
    //attaches an event listener for a double-click to the toDoItem, and tells it to call a function named toggleToDoItemState in response. You’ll be creating that function with the next card!
    
    document.getElementById("todo-entry-box").value="";
    //borra la casilla del input despues de subirlo
}


/*Now, connect to the function to the Add button: just change your addToDoItem function to get the text from the box and pass it to the newToDoItem function you’ve just created.
//You’ve already set up the listener for a double-click on a to-do item. All you need to do now is write a function that will toggle the item between complete and not complete when that double-click happens.
//The trick is knowing on which item to toggle the class. To identify the item that was clicked, you’ll need to use a new JavaScript keyword: this.
//How exactly the this keyword works is a bit complicated, but all you need to know here is that, when it’s used with a function called by an event listener, it means ‘the element the listener was bound to’. So you can use this to identify the specific <li> item that was clicked!*/

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

//Once you’ve marked items as complete, you’ll want a way to remove all those completed items. Also, if you come back to your list after a long time, or if you just want to work on something totally new, you might want to clear out everything on it. To do this, you just need to update two functions you’ve already connected to buttons: clearCompletedToDoItems and emptyList.

//save the list. There are two parts to this: saving the list and, if it’s there, loading it again when the page is reloaded.
//This gets a bit tricky: local storage can’t store HTML, so you need to take the HTML code and turn it into pure JavaScript. To do this, you’ll need an array.
//An array is a special kind of variable that’s a list of variables. You can create one with square brackets [], and add items to it with the push method. You can remind yourself what a specific array item is using alert and the item’s position in the array. Remember that JavaScript starts counting at 0!
//Next, you need to loop over the toDoList list and add each item to the array. Remember that you need to store not just the task, but also whether or not it’s completed. The best way to do this is using JavaScript objects.
//Once you’ve converted all the to-do items into objects, you just need to save them to local storage. Local storage can only store strings, but luckily JavaScript turns arrays into strings for you if you use the stringify function!
 
//function saveList() { es nuestra function savetodo
    

//To load the list, you need to reverse everything you did to save it. But first, you need to check if there’s anything to load. You do this by checking if the key you used to store the list doesn’t have a null value. ‘Null’ is just another word for ‘empty’, or ‘nothing’.
//Create a loadList function and have it:
//Check if the toDos key exists in local storage
//If it does, load it into a variable as an array
//Loop over the array, and use newToDoItem to create new to-do items for everything in it

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        let toDos = JSON.parse(localStorage.getItem("toDos"));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();
