// Main import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component imports
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
        ],
    }
]);

export default function WebfolioRouter() {
    return <RouterProvider router={router} />;
}