import Projects from "../pages/projects.page"
import ProjectsViewPage from "../pages/projectsView.page"
import Signup from "../pages/signup.page"
import Login from "../pages/login.page"

export const PRIVATE_ROUTES = [
    {
        path:"/projects/:projId",
        component:<Projects />,
    },
    {
        path:"/projects",
        component:<ProjectsViewPage />,
    }
]
export const PUBLIC_ROUTES = [
    {
        path:"/login",
        component:<Login />,
    },{
        path:"/signup",
        component:<Signup />,
    },
]