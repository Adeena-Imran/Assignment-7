import React from 'react';


type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

const Books = async () => {
  
  const Bookdata = await fetch('https://simple-books-api.glitch.me/books/');
  const books: Book[] = await Bookdata.json();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-yellow-950 mb-6">Books List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold  text-yellow-950mb-2">{book.name}</h2>
            <p className="text-yellow-950">Type: {book.type}</p>
            <p
              className={`text-sm font-medium mt-2 ${
                book.available ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {book.available ? 'Available' : 'Not Available'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
