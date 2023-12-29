import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/root/Root";
import Home from "../../Pages/home/Home";

const route = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])

export default route;