import { CiLocationOn } from "react-icons/ci";
import { IoBookSharp, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
function ReadWishList({ book }) {
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
  return (
    <div className="flex items-center flex-col md:flex-row gap-6 w-full border p-6 border-border rounded-xl">
      <div className="bg-muted w-full md:w-fit py-7 px-12 rounded-lg">
        <img className="w-32 h-44 rounded-md mx-auto" src={image} alt="" />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold playfair">{bookName}</h2>
        <p className="mt-3 mb-4">
          <span className="font-medium">By : </span> {publisher}
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center ">
            <p className="flex items-center">
              <span className="font-semibold mr-4">Tags :</span>{" "}
              <p className="flex gap-3 items-center">
                {tags.map((t, i) => (
                  <span
                    className="bg-muted text-green px-3 py-1 rounded-2xl font-medium text-sm"
                    key={i}
                  >
                    #{t}
                  </span>
                ))}
              </p>
            </p>
            <p className="flex items-center md:ml-4 gap-3 mt-4">
              <CiLocationOn />
              <span>Year of Publishing : </span>
              {yearOfPublishing}
            </p>
          </div>
          <div className="flex items-center my-4">
            <p className="flex items-center">
              <IoPeople /> <span className="ml-2 mr-2">Publisher : </span>
              {publisher}
            </p>
            <p className="flex items-center ml-4">
              <IoBookSharp /> <span className="ml-2 mr-2">Pages : </span>
              {totalPages}
            </p>
          </div>
          <p className="border-t-2 border-dashed w-full mb-4"></p>
          <div className="flex items-center gap-4">
            <p className="bg-blue-100 px-3 py-1  rounded-2xl">
              <span className="font-medium">Category : </span> {category}
            </p>
            <p className="bg-red-100 px-3 py-1 hidden md:block rounded-2xl">
              <span className="font-medium">Rating : </span> {rating}
            </p>
            <Link to={`/book/${bId}`}>
              <Button className="rounded-2xl">View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadWishList;
