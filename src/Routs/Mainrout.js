import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Login from "../Components/Login/Login";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/all-tutorial'),
                element:<Courses></Courses>
                
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/all-tutorial'),
                element:<Courses></Courses>
                
            },
            {
                path: '/blog',
                element:<Blog></Blog>
                
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<RegisterPage></RegisterPage>
            },
            {
                path: '/course-name/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/tutorial/${params.id}`),
            }
        ]
    },
    {
        path: '*',
        element:<div><h3>The page is 404</h3></div>
    }
]);