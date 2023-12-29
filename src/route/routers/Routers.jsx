import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/root/Root";

const route = createBrowserRouter([
    {
        path:"/",
        element:<Root/>
    }
])

export default route;