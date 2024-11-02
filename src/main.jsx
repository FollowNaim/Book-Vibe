import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/loading/Spinner";
import "./index.css";
import { Routes } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={Routes} />
    </Suspense>
  </StrictMode>
);
