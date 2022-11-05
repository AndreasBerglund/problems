const createBook = (title, author, year) => {
  return {
    title: title,
    author: author,
    year: year,
  };
};

const book1 = createBook("Lord of the rings", "JRR", 1962);
const book2 = createBook("The shining", "King", 1982);

console.log(book1, book2);
