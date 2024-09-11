import { Suspense } from "react";
import { Navigate } from "react-router-dom";

export const baseRoutes = [
  {
    path: "/",
    element: <div />,
    children: [
      {
        path: "",
        element: <Navigate to="/main" />,
      },
      {
        path: "404",
        element: <Suspense>404</Suspense>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];
