export const userRoutes = [
  {
    path: "/user",
    async lazy() {
      const { UserPage } = await import("@/pages/User");

      return { Component: UserPage };
    },
  },
];
