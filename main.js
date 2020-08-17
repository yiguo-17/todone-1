// Remember that our list is called `todos`, and it's in `todos.js`. It's not in this file, nor is it being `require`-d in, but it's available globally because its file is loaded in before this one in `index.html`.

// Write each function below its comment and you'll be doing pretty well.  The printTodo function has been begun for you so that we can drill down in the comments on its individual steps. Add the code for each part below its comment as well.
// Doing our code under its pre-written comment in this way will self-document your code and, more importantly, make it easier to follow along with the assignment!

// Remember that each function below is a helper function or an event listener function that runs when the user interacts with our page. So we should NOT be calling any functions or doing anythinmg in the global scope. Just functions functions functions!
// (With one big exception, which you'll see in the comments when we get there.)

// And now: code away.



// Given a todo object, adds an item to our todo list.

// Given a todo object, put it on the DOM. This is a pretty big function!
const printTodo = function(todo) {
  const bullet = document.createElement("li");
  bullet.innerText = todo.text; // Use `document.createElement` to make an <li>, and set its text (preferably using `.innerText`) to be our given object's text field.



 const toDos = document.querySelector("ol"); // Query the ol and put it in a variable.



  toDos.appendChild(bullet);// Append the li we made to the ul as the last child using `.appendChild`. If this isn't working for you, check what is being appended to what!



  bullet.classList.add("todo-item");// Give our new li a `todo-item` class using `classList`.



 bullet.id = todo.id; // Give our new li an id that is the object's id. This is so that we have a matching relationship between todo node elements and their corresponding objects.



  if(todo.complete === true){
    bullet.classList.add("complete");
  }// Give the li a `complete` class if the todo object indicates it was complete already.
  const  completeness = function() {
    bullet.classList.toggle("complete");
    todos[bullet.id].complete = !todos[bullet.id].complete;
  }

bullet.addEventListener('click',completeness);

  // Give the <p> with the todo's text in it an event listener
  // to toggle that todo's completeness.
  // This is quite a challenge, so feel free to come back to this one at the end!
  // You'll want to add an event listener to the `li` you just made, and in that event listener function, toggle its completeness on both the DOM (using `classList.toggle`) and in our global array (toggling its completeness property).
  // The hard part will be finding it on the DOM and finding it in our array. We can tell what `li` was clicked using the `event` property passed in, and we can tell what object it goes to using the node element's id that we added above.


}


// Print all todos. Loop through our todos array and call the above function on each one.
const printAll = function(){
  for(const todo of todos){
    printTodo(todo)
  }  
}
printAll()

// Call the above function immediately after you define it, so our todos array gets printed out on page load. This is the only time we're calling a function, the rest is event listeners and helper functions that run when the user interacts with the DOM!

const list = document.querySelector("ol");
const cleanAll = function(){
  list.innerHTML = ""
}



// Clear all todos from the DOM. This is a great helper function for refreshing our todos.
// Test it in the console and see if your lis disappear!



// Refresh our page by calling each of the two above functions. Since printing all todos checks our todos array, if we make a change to our todos array, we can make our DOM match by simply clearing it and repopulating it according to our todos' new state.




/*

Let's wire it all together. Add an event listener for the add todo button that will:
1. Queries the input box. We will need that node element again, so save it to a variable!
2. Create a todo object. Its text should be the text that was in the input box (you might have to research this!), its priority should be set to 2 (we'll return to this when we follow up on this project), and its completeness should be false, as we definitely haven't completed the todo yet.
3. Pass that object to your adding todos function to put it in our array.
4. Pass that object to your adding todos function to put it on the DOM.
5. Stretch goal: remove all text from the input box. Try it without this first, you'll see why we should do it!

*/



/* 

Wire up your clear todos button. Give it an event listener that clears all todos from the DOM (we have a function for that!) and removes them all todo objects from the todos array as well.

*/
const newItem = document.querySelector(".todo-input")
const addNew = function(){

  const newTodo = {
    text: newItem.value,
    complete: false,
    priority: 2,
    id: todos.length
  }
  printTodo(newTodo)
  todos.push(newTodo);
  newItem.value = "";
  //cleanAll();
  //printAll(todos);
}
const button = document.querySelector("button");
button.addEventListener('click',addNew)


// And you're DONE with a basic todo app! Next we'll make it very, very powerful.
