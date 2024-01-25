// Data
const notes = [];

// Componete Note
function Note(text, id) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const btn = document.createElement("button");

  article.classList.add("note");

  li.id = id;
  h3.textContent = text;
  btn.textContent = "Borrar";
  btn.addEventListener("click", () => {
    //Eliminar la nota
    console.log(id);
    const noteRemove = notes.find((note) => parseInt(note.id) == id);
    listNotes.removeChild(noteRemove);
  });

  article.appendChild(h3);
  article.appendChild(btn);

  li.appendChild(article);

  return li;
}

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  if (txtNote.value == "") alert("Escribe tu nota");
  else {
    const newId = notes.length + 1;
    const note = Note(txtNote.value, newId);
    notes.push(note);
    listNotes.appendChild(note);
  }
});
