const library = [
  { title: "Book 1", author: "Author A", genre: "Fantasy", read: true },
  { title: "Book 2", author: "Author B", genre: "Mystery", read: false },
  { title: "Book 3", author: "Author A", genre: "Fantasy", read: false },
  { title: "Book 4", author: "Author C", genre: "Science Fiction", read: true },
  { title: "Book 5", author: "Author D", genre: "Mystery", read: true },
];

function categorizeBooks(library) {
  const categorizedBooks = {};
  for (const book of library) {
    const readStatus = book.read ? "Read" : "Unread";
    const genre = book.genre;
    categorizedBooks[readStatus] ??= {};
    categorizedBooks[readStatus][genre] ??= [];

    categorizedBooks[readStatus][genre].push(book);
  }

  console.log(JSON.stringify(categorizedBooks, null, 2));
}

categorizeBooks(library);
