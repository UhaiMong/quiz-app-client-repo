import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CheckoutPage from "../Components/CheckoutPage/CheckoutPage";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import StaticFaqSection from "../Components/FAQpage/FAQpage";
import Login from "../Components/Login/Login";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import Main from "../Layout/Main";
import Privaterout from "./Privaterout/Privaterout";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://learn-yourself-server.vercel.app/all-tutorial'),
                element: <Courses></Courses>

            },
            {
                path: '/courses',
                loader: () => fetch('https://learn-yourself-server.vercel.app/all-tutorial'),
                element: <Courses></Courses>

            },
            {
                path: '/faq',
                element: <StaticFaqSection/>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/course-name/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learn-yourself-server.vercel.app/tutorial/${params.id}`),
            },
            {
                path: '/checkout',
                element: <Privaterout><CheckoutPage></CheckoutPage></Privaterout>
            }
        ]
    },
    {
        path: '*',
        element: <div><h3>The page is 404</h3></div>
    }
]);