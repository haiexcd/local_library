function getTotalBooksCount(books) {
  return books.length;
};

function getTotalAccountsCount(accounts) {
  return accounts.length;
};

function getBooksBorrowedCount(books) {
  const checkedOut = books.filter((book) => 
  book.borrows.filter((record) => !record.returned).length > 0
  );
  return checkedOut.length;
 }

//  function getMostCommonGenres(books) {
//   const common = {};
//   books.forEach((book) => {
//    if (common[book.genre]) {
//     common[book.genre]++;
//    } else {
//     common[book.genre] = 1;
//    }
//   });
//   return Object.entries(common)
//    .map(([name, count]) => {
//     return {
//      name,
//      count
//     };
//    })
//    .sort((a, b) => b.count - a.count)
//    .slice(0, 5);
//  }




 function getMostCommonGenres(books) {
  const common = {};
  books.forEach((book) => {
   if (common[book.genre]) {
    common[book.genre]++;
   } else {
    common[book.genre] = 1;
   }
  });
  const genreNames = Object.keys(common);
  const results = [];
  for (let i = 0; i < genreNames.length; i++) {
    results.push({ name: genreNames[i], count: common[genreNames[i]] });
  }
  return results.sort((a, b) => b.count - a.count)
  .slice(0, 5);
 }



 
 function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }
 
 function getMostPopularAuthors(books, authors) {
  const result = [];
  authors.forEach((author) => {
    const person = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        person.count += book.borrows.length;
      }
    });
    result.push(person);
  });
  return result.sort((a, b) => b.count - a.count)
  .slice(0, 5);
}
 

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
