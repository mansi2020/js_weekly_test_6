# js_weekly_test_6

# Code description
It declares several variables to store DOM elements and data:

dataBookList: An empty array to store a list of books.
leftNav, rightNav, rightNavDefault, and container: DOM elements selected by their class names.
bookleftNavnodelist and rightNavDefaultArr: Variables declared to store node lists.
displayAllBooksToRight(bookleftNavnodelist) is a function that:

Attaches click event listeners to elements in bookleftNavnodelist.
When an element is clicked, it fetches data based on the category of the clicked element from an external API and then displays the books of that category in the right-hand container.
displayBookOfclickedCat(data, head) is a function that:

Displays a category heading and a list of books based on the provided data in the right-hand container.
displayBookList() is a function that:

Populates the left navigation (sidebar) with a list of book categories.
displayBook(data) is a function that:

Displays a list of books in the default right-hand container.
It creates cards for each book, including the book's image, name, and author.
closePopupMenu(closePopup, popDivParent) is a function that:

Adds a click event listener to a close button in a pop-up modal.
Hides the pop-up modal when the close button is clicked.
bookList() is an asynchronous function that:

Fetches a list of book categories from an external API and stores it in the dataBookList variable.
booksData() is an asynchronous function that:

Fetches details of top books from an external API and stores them in the dataBookDetail variable.
The code also includes comments (//todo) that describe the intended functionality of each section.
