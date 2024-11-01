import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./components/Home/bookDetail/BookDetails";
import Home from "./components/Home/Home";
import ListedBooks from "./components/Listed-Books/ListedBooks";
import Chart from "./components/PagesToRead/Chart";
import "./index.css";
import Layout from "./layout/layout.jsx";

const router = createBrowserRouter([
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
