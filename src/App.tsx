import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = React.lazy(() => import("./components/pages/HomePage/HomePage"));
const IntroductionPage = React.lazy(() => import("./components/pages/IntroductionPage/IntroductionPage"));
const OverviewPage = React.lazy(() => import("./components/pages/OverviewPage/OverviewPage"));
const ErrorPage = React.lazy(() => import("./components/pages/ErrorPage/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/introduction",
    element: <IntroductionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
