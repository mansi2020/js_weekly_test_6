let dataBookList = [];
let leftNav = document.querySelector(".leftNav");
let rightNav = document.querySelector(".rightNav");
let rightNavDefault = document.querySelector(".rightNavDefault");
let container = document.querySelector(".container");
console.log(container);
let bookleftNavnodelist;
let rightNavDefaultArr;

//todo fetch data which are display All Books ToRight function
function displayAllBooksToRight(bookleftNavnodelist) {
  bookleftNavnodelist.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   rightNavDefault.style.display = "none";
      //   fetchClickedBook(e.target.innerText);
      let fetchTheData = async function fetchClickedBook() {
        let data = await fetch(
          `https://books-backend.p.goit.global/books/category?category=${e.target.innerText}`
        );
        let dataFormat = await data.json();
        console.log(dataFormat);
        displayBookOfclickedCat(dataFormat, e.target.innerText);
      };
      if (e.target.innerText != "All Categories") {
        rightNavDefault.style.display = "none";
        rightNav.innerHTML = "";
        fetchTheData();
      } else {
        rightNavDefault.style.display = "block";
        rightNav.style.display = "none";
      }
    });
  });
}

//todo displayBookOfclickedCat
function displayBookOfclickedCat(data, head) {
  rightNav.style.display = "block";
  let bookCat = document.createElement("div");
  bookCat.innerHTML = `
    <h1 class="otherCatHeading">${head}</h1>
  `;
  bookCat.classList.add("bookCatDisplayCat");

  data.forEach((book) => {
    // div for one book
    let bookCatSub = document.createElement("div");
    bookCatSub.classList.add("bookCatSubDisplayCat");

    //image one card
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = book.book_image;

    //book name for one card
    let bookName = document.createElement("h1");
    img.classList.add("bookName");
    bookName.innerText = book.title;

    //book author name for one card
    let autorName = document.createElement("p");
    img.classList.add("autorName");
    autorName.innerText = book.author;

    //append all childs to bookcatsub
    bookCatSub.appendChild(img);
    bookCatSub.appendChild(bookName);
    bookCatSub.appendChild(autorName);
    bookCat.appendChild(bookCatSub);
  });
  rightNav.appendChild(bookCat);
}

//todo display booksList
function displayBookList() {
  dataBookList.forEach((book) => {
    // console.log(book.list_name);
    let para = document.createElement("p");
    para.classList.add("leftNavPara");
    para.innerText = book.list_name;
    leftNav.appendChild(para);
    bookleftNavnodelist = document.querySelectorAll(".leftNavPara");
  });
  displayAllBooksToRight(bookleftNavnodelist);
}

//todo display books
function displayBook(data) {
  console.log(data);
  data.forEach((book) => {
    let bookCat = document.createElement("div");
    bookCat.classList.add("bookCat");
    let headingBook = document.createElement("h1");
    headingBook.innerText = book.list_name;
    headingBook.classList.add("headingBook");

    bookCat.appendChild(headingBook);

    let bookCatAllCards = document.createElement("div");
    bookCatAllCards.classList.add("bookCatAllCards");
    let bookArray = book.books;

    for (let i = 0; i < 3; i++) {
      // div for one book
      let bookCatSub = document.createElement("div");
      bookCatSub.classList.add("bookCatSub");

      //image one card
      let img = document.createElement("img");
      img.classList.add("img");
      img.src = bookArray[i].book_image;

      //book name for one card
      let bookName = document.createElement("h1");
      img.classList.add("bookName");
      bookName.innerText = bookArray[i].title;

      //book author name for one card
      let autorName = document.createElement("p");
      img.classList.add("autorName");
      autorName.innerText = bookArray[i].author;

      //append all childs to bookcatsub
      bookCatSub.appendChild(img);
      bookCatSub.appendChild(bookName);
      bookCatSub.appendChild(autorName);
      bookCatAllCards.appendChild(bookCatSub);
    }
    bookCat.appendChild(bookCatAllCards);
    rightNavDefault.appendChild(bookCat);
    rightNavDefaultArr = document.querySelectorAll(
      ".bookCatAllCards .bookCatSub"
    );
  });

  //todo pop up menu for default page books

  let arrOf54Div = [];
  let idx = 0;
  for (let i = 0; i < 18; i++) {
    console.log(data[i]);
    for (let j = 0; j < 3; j++) {
      arrOf54Div[idx] = data[i].books[j];
      idx++;
    }
  }
  console.log(arrOf54Div);

  let closePopup;
  let popDivParent;
  rightNavDefaultArr.forEach((item, idx) => {
    // console.log(item);
    item.addEventListener("click", (e) => {
      popDivParent = document.createElement("div");
      popDivParent.style.display = "flex";
      let popDiv = document.createElement("div");

      let desdcription = "";
      if (arrOf54Div[idx].description == "") {
        desdcription = "there is no description of this book";
      } else {
        desdcription = arrOf54Div[idx].description;
      }
      //   add class to popup
      popDivParent.classList.add("popDivParent");
      popDiv.classList.add("popDiv");

      popDiv.innerHTML = `
        <div class="contentContainer">
                <div class="content">
                    <div class="descHead">
                        <div class="headofclose">
                            <h3>${arrOf54Div[idx].title}</h3>
                            <div class="closePopUp">X</div>
                        </div>
                        
                        <p>${arrOf54Div[idx].author}<p>
                    <div>
                    <div class="des">
                        ${desdcription}
                    </div>
                    <div class="icon">
                        <img id="first" src = "icon1.png"/>
                        <img src = "icon2.png"/>
                        <img src = "icon3.png"/>
                    </div>
                </div>  
        </div>
      `;

      let popUpimg = document.createElement("img");
      popUpimg.classList.add("popUpimage");
      popUpimg.src = arrOf54Div[idx].book_image;
      console.log(popUpimg.src);
      popDiv.insertBefore(popUpimg, popDiv.children[0]);

      let button = document.createElement("button");
      button.innerText = "ADD TO SHOPPING LIST";
      button.classList.add("addToshoppingButton");
      popDiv.appendChild(button);
      popDivParent.appendChild(popDiv);
      container.appendChild(popDivParent);
      closePopup = document.querySelector(".closePopUp");
      console.log(closePopup);

      closePopupMenu(closePopup, popDivParent);
      console.log(popDivParent);
    });
  });
}

//todo close popup
function closePopupMenu(closePopup, popDivParent) {
  console.log("hello");
  console.log(closePopup, popDivParent);
  closePopup.addEventListener("click", (e) => {
    console.log("hello");
    popDivParent.style.display = "none";
  });
}

// let flag = 0;
// todo take list of book
async function bookList() {
  let data = await fetch(
    "https://books-backend.p.goit.global/books/category-list"
  );
  dataBookList = await data.json();
  let flag = "bookList";
  displayBookList();
}
bookList();
// console.log(flag);

//todo fetch detail data of books
let dataBookDetail = [];
async function booksData() {
  let data = await fetch("https://books-backend.p.goit.global/books/top-books");
  dataBookDetail = await data.json();
  let flag = false;
  displayBook(dataBookDetail, flag);
}
booksData();

// //todo pop up
// function showPopup(rightNavDefaultArr){
//     rightNavDefaultArr.forEach((item)=>{
//         item.addEventListener("click",(e)=>{
//             let popDivParent = document.createElement
//             let popDiv = document.createElement("div");
//             popDiv.innerHTML = `

//             `
//             console.log(e.target);
//         })

//     });
// }
