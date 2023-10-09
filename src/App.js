import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ArtistPage from "./views/ArtistPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "artist", element: <ArtistPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
