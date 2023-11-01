const saveButton = document.getElementById("saveButton");
const noteInput = document.getElementById("noteInput");
const savedNotesContainer = document.getElementById("savedNotes");

// Load existing notes from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedNotes = JSON.parse(localStorage.getItem("supernotes")) || [];

  savedNotes.forEach(function (note) {
    createNoteElement(note);
  });
});

saveButton.addEventListener("click", function () {
  const note = noteInput.value.trim();
  if (note !== "") {
    // Create a new note element and add it to the display
    createNoteElement(note);

    // Save the note to localStorage
    const savedNotes = JSON.parse(localStorage.getItem("supernotes")) || [];
    savedNotes.push(note);
    localStorage.setItem("supernotes", JSON.stringify(savedNotes));

    // Clear the input field after saving the note
    noteInput.value = "";
  }
});

// Function to create and append a new note element
function createNoteElement(noteText) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  noteElement.textContent = noteText;
  savedNotesContainer.appendChild(noteElement);
}
