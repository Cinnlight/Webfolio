// Main import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Component imports
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "resume", element: <Resume /> },
        ],
    }
]);

export default function WebfolioRouter() {
    return <RouterProvider router={router} />;
}