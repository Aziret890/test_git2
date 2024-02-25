import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Contexts from "./Contexts";
import Push from "./compotens/Push";
import Home from "./pages/Home";
import Menu from "./compotens/Menu";
import Order from "./compotens/Order";
import MenuPages from "./pages/MenuPages";
import Edit from "./compotens/Push copy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <MenuPages />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
