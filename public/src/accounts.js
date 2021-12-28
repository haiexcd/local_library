const findAccountById = (accounts, id) => {
  return accounts.find(account => account.id === id);
};


function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((a, b) => a.name.last > b.name.last?1:-1);
  return sorted;
}

// function getTotalNumberOfBorrows(account, books) {
//   const accountId = account.id;
//   let total = 0;
//   books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++));
//   return total;
// }

function getTotalNumberOfBorrows(account, books) {
  const results = books.reduce((total, book) => {
    const borrowed = book.borrows;
    for(key of borrowed) {
      key.id === account.id ? total++ : total += 0;
    }
    return total
  },0);
  return results
  };

function getBooksPossessedByAccount(account, books, authors) {
  const taken = [];
  books.forEach(book => {
    const borrowed = book.borrows;
    if (borrowed.find(item => item.id === account.id && !item.returned)) {
      taken.push(book);
    }
  })
  taken.forEach(book => {
    const anAuthor = authors.find(person => person.id === book.authorId);
    book.author = anAuthor;
  })
  return taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
