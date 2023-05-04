let myLibrary = [];
let clear = document.querySelector(".clear");
let main = document.querySelector(".main");


function Book(title, author, pages) {
  // the constructor...

  this.title= title;
  this.author =author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages);
  myLibrary.push(book);
}

const btn = document.querySelector(".add");

btn.addEventListener('click', function() {

    
    main.style.display = 'block';
    
});

let form = document.querySelector(".form");

form.addEventListener ('submit', function(e) {

  e.preventDefault();
  const title = document.getElementById("title").value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  
  if (title === "" || author === "" || pages === "") {
    alert("Please fill in all fields");
    return false;
  }
  let formData = document.createElement('div');
  formData.className = 'formdata';
  
  formData.innerHTML = title;
  main.appendChild(formData);

  addBookToLibrary(title,author,pages);

  alert(myLibrary);


});
