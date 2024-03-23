/**Question: Create an array of objects representing books. Each book should have properties like title, author, and year of publication. Then, write a function called printBooks that takes this array as an argument and prints out the details of each book in the following format: "Title: [title], Author: [author], Year: [year]". */

const lib_book_info = [
    { title: 'the king arthor', author: 'lee goan', year: 2000 },
    { title: 'Eternal monarch', author: 'Jong teyoul', year: 1995 },
    { title: 'Goblin the infinite love', author: 'lee sang', year: 2015 }
]

function allBookinLib(printBooks) {

    printBooks.forEach( book => {
        console.log(`Title: ${book.title}, Author:${book.author} ,Year:${book.year} `)
    });
    
}

allBookinLib(lib_book_info)