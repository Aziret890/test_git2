import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Contexts from "./Contexts";
import Push from "./compotens/push/Push";
import Home from "./pages/Home";
import Menu from "./compotens/menu/Menu";
import Order from "./compotens/order/Order";
import MenuPages from "./pages/MenuPages";
import Edit from "./compotens/pushcopy/Push copy";

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
