let myLibrary = [];
let clear = document.querySelector(".clear");
let main = document.querySelector(".main");
let cancel = document.querySelector(".cancel");

let library = document.querySelector(".books");

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

function displayBooks () {

  library.innerHTML = '';

  // Loop through each book in the library
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // Create a new div element to hold the book card
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookcard');

    // Add the book details to the card
    const title1 = document.createElement('h2');
    title1.innerHTML =  `${book.title}`;
    bookCard.appendChild(title1);
    
    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    const read = document.createElement('p');
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    bookCard.appendChild(read);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      
      myLibrary.splice(i, 1);
      
      displayBooks();
    });
    
    bookCard.appendChild(removeBtn);
    const toggleButton = document.createElement('button');
    toggleButton.textContent = book.read ? 'Read' : 'Unread';
    toggleButton.addEventListener('click', function() {
    book.read = !book.read;
    toggleButton.textContent = book.read ? 'Read' : 'Unread';
    });


     bookCard.appendChild(toggleButton);


    library.appendChild(bookCard);
  }
}

let check = document.querySelector("input[name=read]");

check.addEventListener('change', function(){

  if (this.checked) {
    toggleButton.textContent = "read";

  } else {
    console.log("Checkbox is not checked..");
  }

});





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
  
  /*if (title === "" || author === "" || pages === "") {
    alert("Please fill in all fields");
    return false;
  }*/
  /*let formData = document.createElement('div');
  formData.className = 'formdata';
  
  formData.innerHTML = title;
  main.appendChild(formData);*/

  

  addBookToLibrary(title,author,pages);

  main.style.display = 'none';
  displayBooks();
  form.reset();

});

cancel.addEventListener('click' , function(){

  main.style.display = 'none';

});

