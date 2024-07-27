document.addEventListener('DOMContentLoaded', function () {

const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.info = function () {
        return `${this.title} by ${this.author}`;
        }
}
});

//Adds Book to Library

function addBookToLibrary(title, author) {
    const newBook  = newBook(title, author);
    myLibrary.push(newBook);
}

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const addBook = dialog.querySelector("#add-book");

showBtn.addEventListener("click", ()=>{
  dialog.showModal();
});

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
  });


//Shows All Books in Library

function displayBooks() {
    const bookSection = document.getElementById('books');

    bookSection.innterHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardTitle = document.createElement("p");
        cardTitle.classList.add("title");
        cardTitle.textContent = book.title;
        card.appendChild(cardTitle);

        const cardAuthor = document.createElement("p");
        cardAuthor.innerHTML = `<strong>Author:</strong> ${book.autho}`;
        card.appendChild(cardAuthor);

        const cardRead = document.createElement("p");
        cardRead.innerHTML = `<strong>Read:</strong> ${book.read}`;
        card.appendChild(cardRead);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Book";
        removeButton.Button.addEventListener("click", function () {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        buttonContainer.appendChild(removeButton);

        const markAsReadButton = document.createElement("button");
        markAsReadButton.textContent = "Mark As Read";
        markAsReadButton.addEventListener("click", function () {
            book.read = "yes"; 
            displayBooks();
        });

        buttonContainer.appendChild(markAsReadButton);

        card.appendChild(buttonContainer);
        bookSection.appendChild(card);

        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const readChecked = document.getElementById('read');
        const read = readChecked.checked ? 'yes' : 'no';
        
        addBookToLibrary(title.value, author.value, read);
        addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "yes");
        addBookToLibrary("1984", "George Orwell", "no");
        addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "yes");
        addBookToLibrary("The Princess Bride", "William Goldman", "yes");
        displayBooks();
        
        dialog.style.display = 'none';
        title.value = '';
        author.value = '';
        readChecked.checked = false;
        

        displayBooks();
});
    

}




