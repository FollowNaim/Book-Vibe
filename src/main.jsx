import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinner from "./components/loading/Spinner";
import "./index.css";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Layout = React.lazy(() => import("./layouts/layout.jsx"));
const Chart = React.lazy(() => import("./pages/PagesToRead/Chart"));
const ListedBooks = React.lazy(() =>
  import("./pages/Listed-Books/ListedBooks")
);
const BookDetails = React.lazy(() =>
  import("./pages/Home/bookDetail/BookDetails")
);

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
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
