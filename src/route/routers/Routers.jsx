import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/root/Root";
import Home from "../../Pages/home/Home";
import Dashboard from "../../Pages/dashboard/Dashboard";
import MyProjects from "../../Pages/myProjects/MyProjects";
import ProjectsDetails from "../../Pages/projectsDetails/ProjectsDetails";
import DashboardCard from "../../Pages/dashboard/DashboardCard";
import AddProject from "../../Pages/addProject/AddProject";
import MyProjectsDetails from "../../Pages/myProjects/MyProjectsDetails";
import UpdateProject from "../../Pages/updateProject/UpdateProject";

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
                        path:"my-projects/:id",
                        element:<MyProjectsDetails/>
                    },
                    {
                        path:"projects/:id",
                        element:<ProjectsDetails/>
                    },
                    {
                        path:"sample-projects",
                        element:<AddProject/>
                    },
                    {
                        path:"update/:id",
                        element:<UpdateProject/>
                    }
                ]
            }
        ]
    }
])

export default route;