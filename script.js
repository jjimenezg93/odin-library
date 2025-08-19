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
