function categoriesBooksByYear(library) {
  const categorizedBooks = {};
  for (const book of library) {
    const year = book.year;
    if (!categorizedBooks[year]) {
      categorizedBooks[year] = [];
    }
    categorizedBooks[year].push(book);
  }
  console.log(categorizedBooks);
}

const library = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2021 },
  { title: "Book 3", author: "Author 3", year: 2020 },
  { title: "Book 4", author: "Author 4", year: 2022 },
  { title: "Book 5", author: "Author 5", year: 2021 },
];

categoriesBooksByYear(library);
