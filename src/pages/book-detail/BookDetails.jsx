import Spinner from "@/components/loading/Spinner";
import { Button } from "@/components/ui/button";
import { setDbData } from "@/utils/addToDB";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

function BookDetails() {
  const [isBtn1Loading, setIsBtn1Loading] = useState(false);
  const [isBtn2Loading, setIsBtn2Loading] = useState(false);
  const books = useLoaderData();
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  console.log(books);
  useEffect(() => {
    const book = books.find((b) => b.bookId === parseInt(bookId));
    setBook(book);
  }, []);
  const handleMarkAsRead = async () => {
    console.log("from mark as read");
    setIsBtn1Loading(true);
    try {
      await setDbData(bookId);
      toast.success("successfully added!");
      setIsBtn1Loading(false);
    } catch (err) {
      toast.error("already added!");
      console.log(err);
      setIsBtn1Loading(false);
    }
  };
  const handleWishList = async () => {
    console.log("from wishlist");
    setIsBtn2Loading(true);
    try {
      await setDbData(bookId, "wishlist");
      toast.success("successfully added!");
      setIsBtn2Loading(false);
    } catch (err) {
      toast.error("already added!");
      console.log(err);
      setIsBtn2Loading(false);
    }
  };
  const {
    bookId: bId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    review,
    publisher,
    yearOfPublishing,
  } = book;
  console.log(book);
  return (
    <div className="container mx-auto px-4 mt-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-muted p-12 rounded-xl flex flex-col justify-center items-center">
          <img className="w-72 mx-auto rounded-md" src={image} alt="" />
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold playfair">{bookName}</h2>
            <p className="font-medium">By : {publisher}</p>
          </div>
          <div className="my-6">
            <p className="border-t-2 border-dashed w-full"></p>
            <p className="my-2">{category}</p>
            <p className="border-t-2 border-dashed w-full"></p>
          </div>
          <div className="flex flex-col gap-6">
            <p>
              <span className="font-bold">Review :</span> {review}
            </p>
            <p className="flex items-center gap-4">
              <span className="font-bold">Tags :</span>{" "}
              <div className="flex items-center gap-4">
                {tags?.map((t, i) => (
                  <span
                    className="rounded-xl bg-muted text-green py-1 px-2"
                    key={i}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </p>
          </div>
          <p className="border-t-2 border-dashed w-full my-6"></p>
          <div className="flex flex-col gap-3 w-full md:max-w-80">
            <p className="flex justify-between items-center">
              <span>Number of Pages : </span>
              <span className="font-semibold"> {totalPages}</span>
            </p>
            <p className="flex justify-between items-center">
              <span>Publisher : </span>
              <span className="font-semibold"> {publisher}</span>
            </p>
            <p className="flex justify-between items-center">
              <span>Year of Publishing: : </span>
              <span className="font-semibold">{yearOfPublishing}</span>
            </p>
            <p className="flex justify-between items-center">
              <span>Rating :</span>
              <span className="font-semibold">{rating}</span>
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={handleMarkAsRead} variant="outline" className="">
              {isBtn1Loading && <Spinner />} Mark as Read
            </Button>
            <Button onClick={handleWishList} variant="" className="bg-black">
              {isBtn2Loading && <Spinner />} Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
