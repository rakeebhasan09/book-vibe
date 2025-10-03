import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		axios.get("booksData.json").then((res) => setBooks(res.data));
	}, []);
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{books.map((book) => (
				<Book key={book.bookId} book={book}></Book>
			))}
		</div>
	);
};

export default Books;
