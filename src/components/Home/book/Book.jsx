import star from "@/assets/star.png";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function Book({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
  } = book;

  return (
    <Card className="flex flex-col shadow-sm">
      <CardHeader className="grow">
        <Link to={`/book/${bookId}`}>
          {" "}
          <div className="bg-muted py-6 rounded-md mb-6">
            <img className="w-36 h-52 rounded-md mx-auto" src={image} alt="" />
          </div>
        </Link>
        <div className="flex flex-col">
          <div className="flex gap-4">
            {tags.map((tag, i) => (
              <p
                key={i}
                className="bg-muted text-green px-3 py-1 rounded-2xl font-medium text-sm"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="">
            <CardTitle className="text-2xl font-bold mt-4 playfair">
              {bookName}
            </CardTitle>
            <CardDescription className="mt-4 text-sm font-medium text-black">
              By: {publisher}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col">
        <p className="border-t-2 border-dashed border-border mb-5 w-full"></p>
        <div className="flex justify-between items-center w-full">
          <p>{category}</p>
          <p className="flex items-center gap-2 font-medium">
            {rating} <img className="w-4" src={star} alt="" />
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Book;
