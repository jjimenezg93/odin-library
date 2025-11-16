const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

Book.prototype.equals = function (other) {
  if (Object.getPrototypeOf(this) !== Object.getPrototypeOf(other)) {
    return false;
  }
  return (
    this.title == other.title &&
    this.author == other.author &&
    this.pages == other.pages
  );
};

let diaNewBook = document.getElementById("dia-new-book");
let formNewBook = document.getElementById("form-new-book");
let inputTitle = document.getElementById("new-book-title");
let inputAuthor = document.getElementById("new-book-author");
let inputPages = document.getElementById("new-book-pages");

function addBookToLibrary(book) {
  if (!book)
  {
    return;
  }
  library.push(book);
  displayBooks();
}

addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 323));
addBookToLibrary(new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 398));
addBookToLibrary(new Book("Pride and Prejudice", "Jane Austen", 279));

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

let btnNewBookConfirm = document.getElementById("btn-new-book-confirm");
// btnNewBookConfirm.addEventListener("click", (event) => {
//   event.preventDefault(); // Don't submit the fake form

//   const formData = {};
//   new FormData(formNewBook).forEach((value, key) => {
//     formData[key] = value;
//   });
//   if (!author)
//   {
//     return;
//   }
//   // author.formNoValidate = true;

//   addBookToLibrary(formData.title, formData.author, formData.pages);
//   displayBooks();
//   diaNewBook.close();
//   diaNewBook.style.display = "none";
// });

formNewBook.addEventListener("submit", (event) => {
  let isFormValid =
    inputTitle.validity.valid &&
    inputAuthor.validity.valid &&
    inputPages.validity.valid;
  if (!isFormValid) {
    event.preventDefault();
    return;
  }
  let newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value);
  const bookExists = library.some((book) => {
    return book.equals(newBook);
  });
  if (bookExists) {
    return;
  }
  addBookToLibrary(newBook);
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
