import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Courses></Courses>
                
            },
            {
                path: '/course-name/:id',
                element:<CourseDetails></CourseDetails>
            }
        ]
    },
    {
        path: '*',
        element:<div><h3>The page is 404</h3></div>
    }
]);