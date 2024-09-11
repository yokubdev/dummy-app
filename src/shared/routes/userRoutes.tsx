export const userRoutes = [
  {
    path: "/user",
    async lazy() {
      const { DashboardPage } = await import("@/pages/Dashboard");

      return { Component: DashboardPage };
    },
  },
];
