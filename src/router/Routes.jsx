// import { lazy, Suspense } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // Lazy-loaded components
// const Section = lazy(() => import("../pages/section"));
// const LogComplain = lazy(() => import("../pages/logcomplain"));
// const Contact = lazy(() => import("../pages/contact"));

// export default function RouterContainer() {
//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Section />,
//     },
//     {
//       path: "/logcomplain",
//       element: <LogComplain />,
//     },
//     {
//       path: "/contact",
//       element: <Contact />,
//     },
//   ]);

//   return (
//     <RouterProvider router={routes}>
//       <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
//     </RouterProvider>
//   );
// }
