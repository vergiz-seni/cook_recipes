import Layout from "./components/Layout.jsx";
import MainPage from "./components/pages/MainPage/MainPage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export default function App() {
    const routes = [
        {
            element: <Layout/>,
            children: [
                {
                    path: "/login",
                    element: <MainPage/>
                }
            ]
        }
    ]
    const router = createBrowserRouter(routes)
    return <RouterProvider router={router}/>
}

