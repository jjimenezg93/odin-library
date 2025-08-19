const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  library.push(new Book(title, author, pages));
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 323);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 398);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279);

console.log(library);

function displayBooks() {
  let mainElem = document.querySelector("main");
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
