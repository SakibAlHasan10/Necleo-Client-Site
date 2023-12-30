import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/root/Root";
import Home from "../../Pages/home/Home";
import Dashboard from "../../Pages/dashboard/Dashboard";
import MyProjects from "../../Pages/myProjects/MyProjects";
import ProjectsDetails from "../../Pages/projectsDetails/ProjectsDetails";
import DashboardCard from "../../Pages/dashboard/DashboardCard";
import AddProject from "../../Pages/addProject/AddProject";

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
                        element:<DashboardCard/>
                    },
                    {
                        path:"my-project",
                        element:<MyProjects/>
                    },
                    {
                        path:"projects/:id",
                        element:<ProjectsDetails/>
                    },
                    {
                        path:"sample-projects",
                        element:<AddProject/>
                    }
                ]
            }
        ]
    }
])

export default route;