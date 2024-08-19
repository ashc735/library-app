document.addEventListener('DOMContentLoaded', function () {
    const myLibrary = [];

    function Book(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages} pages Read: ${this.read}`;
        }
    }

    //adds book to library

    function addBookToLibrary(title, author, read) {
        const newBook = new Book(title, author, read);
        myLibrary.push(newBook);
    }

    // shows all books

    function displayBooks() {
        const bookSection = document.getElementById('books');

        bookSection.innerHTML = ''; 

        myLibrary.forEach((book, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            const cardTitle = document.createElement("p");
            cardTitle.classList.add("title");
            cardTitle.textContent = book.title;
            card.appendChild(cardTitle);

            const cardAuthor = document.createElement("p");
            cardAuthor.innerHTML = `<strong>Author:</strong> ${book.author}`;
            card.appendChild(cardAuthor);

            const cardRead = document.createElement("p");
            cardRead.innerHTML = `<strong>Read:</strong> ${book.read}`;
            card.appendChild(cardRead);

            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove Book";
            removeButton.addEventListener("click", function () {
                myLibrary.splice(index, 1); 
                displayBooks();
            });

            buttonContainer.appendChild(removeButton);

            const markAsReadButton = document.createElement("button");
            markAsReadButton.textContent = "Mark As Read";
            markAsReadButton.addEventListener("click", function () {
                book.read = "yes"; // Mark the book as read
                displayBooks();
            });

            buttonContainer.appendChild(markAsReadButton);


            card.appendChild(buttonContainer);
            bookSection.appendChild(card);
        });
    }

    // shows book form if "new book" button is clicked
    const newBookButton = document.getElementById('new-book');
    const formElement = document.getElementById('form-element');


    newBookButton.addEventListener("click", function () {
        if (formElement.style.display === 'none' || formElement.style.display === '') {
            formElement.style.display = 'block';
        }
    });

    // after book is added 
    const addBookButton = document.getElementById('add-book');

    addBookButton.addEventListener("click", function () {
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const readChecked = document.getElementById('read');

        if (!title.value || !author.value ) {
            alert('Please fill out all required fields.');
            return;
        }

        const read = readChecked.checked ? 'yes' : 'no';

        addBookToLibrary(title.value, author.value, read);
        displayBooks();

        formElement.style.display = 'none';
        title.value = '';
        author.value = '';
        readChecked.checked = false;
    });

    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "yes");
    addBookToLibrary("1984", "George Orwell", "no");
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "yes");

    displayBooks();

});