let editor = document.getElementById("editor");
let reset = document.getElementById("clear");
let text = localStorage.getItem("textEditor");

window.addEventListener("load", function() {
  editor.value = text;
});

window.addEventListener("beforeunload", function() {
  localStorage.setItem("textEditor", editor.value);
});
