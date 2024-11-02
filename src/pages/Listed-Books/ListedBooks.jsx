import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDbData } from "@/utils/addToDb";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReadWishList from "./ReadWishList";
import Dropdown from "./dropdown/Dropdown";

function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const readList = getDbData("read-list");
    const wishList = getDbData("wishlist");
    console.log(readList, wishList);
    setReadBooks(books.filter((b) => readList.includes(b.bookId)));
    setWishlistBooks(books.filter((b) => wishList.includes(b.bookId)));
  }, []);
  return (
    <div className="container mx-auto px-4 mt-10 mb-16">
      <Tabs defaultValue="readList" className="">
        <TabsList>
          <TabsTrigger value="readList">Read Books</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist Books</TabsTrigger>
        </TabsList>
        <TabsContent value="readList" className="mt-6">
          <div className="w-full flex flex-col gap-4">
            {readBooks.map((book) => (
              <ReadWishList key={book.bookId} book={book} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="wishlist" className="mt-6">
          <div className="w-full flex flex-col gap-4">
            {wishlistBooks.map((book) => (
              <ReadWishList key={book.bookId} book={book} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ListedBooks;
