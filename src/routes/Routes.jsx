import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/home/Home"));
const Layout = React.lazy(() => import("@/layouts/Layout"));
const Chart = React.lazy(() => import("@/pages/pages-to-read/Chart"));
const ListedBooks = React.lazy(() =>
  import("@/pages/listed-books/ListedBooks")
);
const BookDetails = React.lazy(() => import("@/pages/book-detail/BookDetails"));

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/pages-to-read",
        element: <Chart />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);
