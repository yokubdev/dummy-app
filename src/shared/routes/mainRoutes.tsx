export const mainRoutes = [
  {
    path: "/main",
    async lazy() {
      const { MainPage } = await import("@/pages/Main");

      return { Component: MainPage };
    },
  },
];
