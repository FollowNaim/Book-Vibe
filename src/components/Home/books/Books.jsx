import { useEffect, useState } from "react";
import Book from "../book/Book";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="container mx-auto px-4 my-16">
      <div className="text-center">
        <h3 className="text-2xl font-semibold playfair">Books</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Books;
