var noteInput = document.getElementById("new-note");
var addButton = document.getElementsByTagName("button")[0];
var savedNotesHolder = document.getElementById("saved-notes");

//New Note List Item
var createNewNoteElement = function(noteString) {
    //Create List Item
    var listItem = document.createElement("li");
    //label
    var label = document.createElement("label");
    //button.delete
    var deleteButton = document.createElement("button");
    //Each element needs modifying
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = noteString;

    // each element needs appending
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    return listItem;
}
// Add a new note
var addNote = function() {
    console.log("Add Note...");
    //Create a new list item with the text from #new-note:
    var listItem = createNewNoteElement(noteInput.value);
    //Append listItem to savedNotesHolder
    savedNotesHolder.appendChild(listItem);
    bindNoteEvents(listItem);

    noteInput.value = "";
}
// Delete an existing note
var deleteNote = function() {
    console.log("Delete Note...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    //Remove the parent list item from the ul
    ul.removeChild(listItem);
}

var bindNoteEvents = function(noteListItem) {
    console.log("Bind list item events");
    //select noteListItem's children
    var deleteButton = noteListItem.querySelector("button.delete");
    //bind deleteNote to delete button
    deleteButton.onclick = deleteNote;
}

// Set the click handler to the addNote function
//addButton.onclick = addNote;
addButton.addEventListener("click", addNote);
