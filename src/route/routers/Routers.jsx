import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/root/Root";
import Home from "../../Pages/home/Home";
import Dashboard from "../../Pages/dashboard/Dashboard";
import MyProjects from "../../Pages/myProjects/MyProjects";
import ProjectsDetails from "../../Pages/projectsDetails/ProjectsDetails";

const route = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        path:"",
                        element:<MyProjects/>
                    },
                    {
                        path:"projects/:id",
                        element:<ProjectsDetails/>
                    }
                ]
            }
        ]
    }
])

export default route;