// const findAuthorById = (authors, id) => {
//   return authors.find(author => author.id === id);
// };

// const findBookById = (books, id) => {
//   return books.find(book => book.id === id);
// };



//helper function
function findById(array, id) {
  const results = array.find(element => {
    if(element.id === id) {
      return element
    }
  })
  return results
}

function findAuthorById(authors, id) {
  //returning result of helper
  return findById(authors, id);
}
function findBookById(books, id) {
  //returning result of helper
  return findById(books, id);
}




// function partitionBooksByBorrowedStatus(books) {
//   const borrowed = [];
//   const returned = [];
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].borrows[0].returned === false) {
//       borrowed.push(books[i]);
//     } else {
//       returned.push(books[i]);
//     }
//   }
//   const partitioned = [borrowed, returned];
//   return partitioned;
// };

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned)
  );
  const notReturned = books.filter((book) =>
   book.borrows.some((borrow) => !borrow.returned)
  );
  const result = [[...notReturned], [...returned]];
  return result;
 }


function getBorrowersForBook(book, accounts) {
  const result = [];
  const borrowed = book.borrows;  
  borrowed.forEach(borrow => {
    const account = accounts.find(account => account.id === borrow.id);
    const item = account;
    item.returned = borrow.returned;
    result.push(item);
  });
  return result.slice(0,10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
