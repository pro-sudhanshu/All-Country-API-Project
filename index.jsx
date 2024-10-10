import { createRoot } from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Country from "./components/Country"
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/:country',
            element: <Country />,
        },
    ]
  },
])

createRoot(document.querySelector("#root")).render(
  <RouterProvider router={router} />
)
