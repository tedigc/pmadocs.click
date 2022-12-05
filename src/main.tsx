import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const App = React.lazy(() => import("./App"));
const ErrorPage = React.lazy(() => import("./ErrorPage"));
const IntroductionPage = React.lazy(() => import("./IntroductionPage"));
const OverviewPage = React.lazy(() => import("./OverviewPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/introduction",
    element: <IntroductionPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
