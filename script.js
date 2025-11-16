const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

let diaNewBook = document.getElementById("dia-new-book");
let formNewBook = document.getElementById("form-new-book");

function addBookToLibrary(title, author, pages) {
  library.push(new Book(title, author, pages));
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 323);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 398);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279);

function displayBooks() {
  let mainElem = document.querySelector("main");
  mainElem.replaceChildren();
  library.forEach((book) => {
    let bookCard = document.createElement("article");
    bookCard.classList.add("book-card");

    let bookTitle = document.createElement("h1");
    bookTitle.textContent = book.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    let bookPages = document.createElement("p");
    bookPages.textContent = book.pages;

    bookCard.append(bookTitle, bookAuthor, bookPages);

    mainElem.appendChild(bookCard);
  });
}

displayBooks();

let btnNewBookConfirm = document.getElementById("btn-new-book-confirm");
btnNewBookConfirm.addEventListener("click", (event) => {
  // event.preventDefault(); // Don't submit the fake form

  const formData = {};
  new FormData(formNewBook).forEach((value, key) => {
    formData[key] = value;
  });
  let author = document.getElementById("new-book-author");
  // author.formNoValidate = true;

  addBookToLibrary(formData.title, formData.author, formData.pages);
  displayBooks();
  diaNewBook.close();
  diaNewBook.style.display = "none";
});

function showModal() {
  diaNewBook.showModal();
  diaNewBook.style.display = "grid";
}

// Close modal when clicking anywhere else
window.onclick = function (event) {
  if (event.target == diaNewBook) {
    diaNewBook.style.display = "none";
  }
};
