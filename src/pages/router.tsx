import routes from "@/shared/routes";
import { createBrowserRouter } from "react-router-dom";
// import { QueryParamProvider } from "use-query-params";
// import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: (
  //     <QueryParamProvider
  //       adapter={ReactRouter6Adapter}
  //       options={{
  //         searchStringToObject: queryString.parse,
  //         objectToSearchString: queryString.stringify,
  //       }}
  //     >
  //       <AuthModule.Containers.Auth>
  //         <Layouts.Auth/>
  //       </AuthModule.Containers.Auth>
  //     </QueryParamProvider>
  //   ),
  // },
  ...routes,
  {
    index: true,
    path: "/",
    async lazy() {
      const { DashboardPage } = await import("@/pages/Dashboard");

      return { Component: DashboardPage };
    },
  },
]);
