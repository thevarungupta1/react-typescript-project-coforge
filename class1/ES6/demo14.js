class Book {
  // title;
  // author;
  // price;

  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  getBookInfo() {
    console.log(
      `Title = ${this.title}, Author = ${this.author}, Price = ${this.price}`
    );
  }
}

const book1 = new Book("Title 1", "Author 1", 1000);
book1.getBookInfo();
